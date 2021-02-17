 ---
createPage: true
templateKey: blog-post
title: .NET Core development with Docker
author: Winton DeShong
date: 2017-11-21
featured: false
featuredColor: -violet-blue
featuredImage:
  image: /img/blog/blog_featured_image.jpg
  description: "blog header"
tileImage:
  image: /img/post_default_dark_3.jpg
  description: "blog header"
postImage:
  image: /img/header_default_dark_3.jpg
  description: "blog header"
seo:
  metaTitle: .NET Core development with Docker | andculture
  metaDescription: andculture leverages continuous integration to help deliver our software projects. With .NET Core & Docker, we now have better ways to consolidate our workflow.
  socialShareCopy: andculture leverages continuous integration to help deliver our software projects. With .NET Core & Docker, we now have better ways to consolidate our workflow.
category: "Engineering"
---
As software designers and engineers, the number of technologies we orchestrate to deliver a new project is staggering. Naturally the landscape of practices and tools we use to build these solutions is just as broad. How do we navigate this plethora of options in a way that promotes creativity and productivity while maintaining reliability in our delivery?

Our development team at andculture leverages continuous integration (CI) practices to aid in the delivery of our software projects. We have a slew of Powershell scripts, Bash scripts, MSBuild files, Grunt files, webpack configurations and many other tools coming together to deliver both Linux- and Windows-based solutions. Managing these cross-platform build pipelines is a challenge, but one our development team finds value in managing.

The challenge we continue to face is project ramp up time. Ramp up time does not just apply for new engineers, but also designers and front-end developers.

With the advent of .NET Core and Docker, we have new and improved ways to consolidate our workflow. Recently, I had the opportunity to do a deep dive into how these technologies might intersect.

Experienced in this topic and tired of my rambling? Check out the [GitHub repository](https://github.com/AndcultureCode/docker-dotnet-example).

## Hopes
* All contributors run the full application locally
* Ramp up requires minimal involvement from another team member or following a tedious setup process
* Eliminate hybrid workflows involving virtual machines and/or sharing centralized remote resources (i.e., databases) &mdash; what if designers could have their own Microsoft SQL Server instance running on their Mac?
* Simplified management of CI servers &mdash; would our CI servers only need Git and Docker installed?
* Increase the number of our projects that are stateless and horizontally scalable without significantly increasing project setup complexities and management (i.e., [Microservice Premium](https://martinfowler.com/bliki/MicroservicePremium.html)) &mdash; for example, with a team of six engineers, even small configuration and infrastructure changes translate to six people who need to update their environment
* **Bonus:** How could we help non-technical staff share our work (sometimes projects that are no longer live) in environments where internet is often limited?

**Disclaimers**

*.NET Core is starting to stabilize with version two, but it is still a bit of a moving target. Many of the assemblies you grew to love have been rewritten, relocated or no longer exist. To be clear, this isn’t a complaint as I really like the direction Microsoft and the community are taking.*

*While Docker has been around for a while, the use case for having it fully power your dotnet development environment has not. As I’ll touch on later, the performance in development is lacking.*

## Where do we begin?
Docker can be a bit overwhelming to learn. While there is extensive documentation, there are so many aspects to the docker ecosystem it can be difficult to know where to start and what all you’ll need. Below is a list of resources, concepts and docker commands I used to build the following [dotnet development environment](https://github.com/AndcultureCode/docker-dotnet-example) project. I recommend diving deeper into each concept, but my hope is this can serve as a roadmap for your learning.

## Docker images and containers
Ultimately we are going to break up our application into a series of docker images that can run standalone. These images include all the code, dotnet runtime, configuration and other settings. Each image has its own “Dockerfile” that describes what docker needs to layer together.

In our sample application, we will have two different types of services: a dotnet web service that houses our backend and frontend application files and a database service running an official Microsoft MSSQL server docker image.

**Web docker service**

While there are many ways to structure your project’s docker files, I’ve found that images are less fragile and easier to maintain if I break them into the categories of debug and release.

The docker command line tools will automatically find files named “Dockerfile” or “docker-compose.yml” which is helpful in some contexts, but as solutions get more complex, I found these files easier to manage when more explicitly named. As I’ll demonstrate later, you can use a centralized project shell script which resolves this entirely, providing full control over naming while keeping commands succinct.

**Debug image**

*dotnet/ProjectName/dockerfile.web.debug*

![Docker Dotnet Web Debug File](/img/01-docker-dotnet-web-debug.png)

The first “FROM” command is where the power of docker images starts to come into play. Here we are leveraging Microsoft’s official ASP.NET Core v2 development image. When this image is used, docker now knows we are on Linux, installs Dotnet Core SDK and runtime, installs node, and other tooling that otherwise we would need to do manually.

Commands like "FROM", "ENV", "RUN" and "COPY" create what is known as “layers.” These layers are steps that docker evaluates when building and running your images. With these layered images, docker will intelligently cache them to optimize subsequent builds. This caching applies to any docker-run projects on your machine. Not just this project.

The last “ENTRYPOINT” command is quite important. When building your images you’ll typically declare an “ENTRYPOINT” or “CMD” which tells docker what to do when running the image by default. For our debug image this entrypoint is a tad bit more complex than the release use case. Instead of baking in each and every command, forcing docker to rebuild this in the image, we instead just defer to a script we can change outside of the docker build steps.

*dotnet/ProjectName/dockerfile.web.debug.startup*

![Docker Dotnet Web Debug Startup](/img/02-docker-dotnet-web-debug-startup.png)

The key to the debug image is using docker’s volume support to map your host file system at any point in the container's file system. We mount our current code repository into the container. This is done with the ‘-v’ flag when running the image directly.

*$: docker run --rm -i --name projectname-web -v .:/app -t projectname-web .*

Now, each container created from this image executes this script. I’ve configured my startup to work in two different modes. By default it will reevaluate both npm and NuGet packages before running the project, but if previously run, you can jump right to execution via an environment variable.

Creating a separate startup file helps in two major ways. Firstly, it saves you from creating very long, fragile and difficult-to-debug one-liners. You’ll see what I mean as you dive deeper into dockerfile examples.

Secondly, the separation has helped overcome a mental hurdle, as I found it difficult to keep debug and release-related steps in the same file. I also continually found myself getting burned between the “build” versus “runtime” aspects of a dockerfile.

## Docker commands
Below are commands I used in creating the example repository. Of course, refer to the docker documentation for more details and a more exhaustive list of flags.

* *docker build -t.*
  * Builds an image from a given dockerfile. While still useful when handling individual images, ultimately docker-compose will build your project’s images.
* *docker exec -it*
  * Runs a command in a running container. More than anything else, I’ve used exec to run a bash session (docker exec -it /bin/bash).
* *docker image ls*
  * Lists images on your machine.
* *docker image prune*
  * Removes unused images from your machine. Especially when building new images, I’ve found myself constantly wanting a clean slate. Combining prune with other commands helps clear up the clutter.
* *docker inspect*
  * Outputs JSON formatted details about a given container. More than anything else, I look for IP address via *(docker inspect | grep IPAddress).*
* *docker pull*
  * Downloads a given image from a remote repository. For development purposes, docker compose will abstract this away, but if you want to run an external tool or run the project on a new machine, you’ll use pull.
* *docker ps*
  * Without any flags, this lists all running containers on your machine. I’m constantly tossing on the ‘-a’ flag to see what containers I have across the board. While you are building a new image, you inevitably have containers spawned from it exiting prematurely due to some runtime error. You’ll need to do ‘docker ps -a’ to look up the container.
* *docker push*
  * Once you have an image ready to be distributed/deployed, you’ll use push to release it to either docker hub or a private repository.
* *docker rm*
  * Removes an unstarted container from your system. Need to run docker stop first if it is running.
* *docker rmi*
  * Removes an image. May need to add on the ‘--force’ flag to force removal if it is in use (provided you know what you are doing).
* *docker run*
  * Runs a command in a new container. Learning the various flags for the run command will be extremely useful. The flags I’ve been using heavily are as follows:
      * *--rm* - Removes the container after you end the process
      * *-it* - Runs the container interactively
      * *--entrypoint* - Overrides the default command the image specifies
      * *-v* - Maps a host volume into the container. For development, this allows us to use the image’s full environment and tools, but provide it our source code instead of production build files.
      * *-p* - Maps a custom port (i.e., 8080:80)
      * *--name* - Gives the container a human readable name which eases troubleshooting
      * *--no-cache* - Forces docker to reevaluate each step when it runs the container, as opposed to using caching
* *docker version*
  * Outputs both the client vs. server versions of docker being run. This isn’t the same as ‘-v’.
* *docker volume ls*
  * While there are variants on volumes, so far I mostly use the ‘ls’ command to list current volumes for troubleshooting. I’m sure there will more to come with using volumes.

## Docker Compose

**Database docker service**

While we could go forward running a similar docker run command as I showed in my web service example, this becomes tedious. It just so happens docker provides a tool called “Compose” that is just for that reason. It comes pre-installed with docker and provides a declarative approach, via YAML files, to defining your project’s images.

Keeping the specific dockerfiles in parallel to your services source code is helpful, but when it comes to docker compose, it makes sense to put it at the root of your code repository.

*docker-compose.debug.yml*

![Docker Dotnet Compose Example](/img/03-docker-compose-web.png)

![Docker Dotnet Compose Example 2](/img/03-docker-compose-web2.png)

When you call *docker-compose up*, Compose will attempt to load docker-compose.yml and optionally a file called docker-compose.override.yml that it will merge together. As with the Dockerfile naming, I found it is easier to understand when following the debug and release approach.

**Environment variables**

You’ll notice for our database service we configure our environment variables explicitly, but in our web service we defer to the .env file. This is entirely preference, but the idea is that the .env file is something each machine/developer will change while these Docker Compose files should be mostly static and changed only when new infrastructure are manipulated. Thus the .env file itself is not checked into source control and a select few example files are provided (i.e., .env.development.sample).

*.env.development.sample*

![Environment Variables](/img/04-environment-variables.png)

Do your best to ensure the variables in the samples are defaults that will work for the most team members &mdash; in my case, designers and developers on Windows and Mac OS X environments. Take the DATABASE_PORT, for example.. While not a problem for designers, many of our developers will have a full installation of MSSQL server running on the default port of 1433. The default for docker’s port should change so it has the best chance of avoiding collision out of the box.

## Command-line interface (CLI)
As I mentioned previously, I found it necessary to create a centralized command-line interface to simplify the increasingly tedious docker commands. Naturally though, now we have a place to create simplified versions of other commands. For instance, anyone tired of having to change directory to run entity framework migrations (or tried to type out a command to not have to change directories)? *Why not have a `./sdk create-migration ’ command?*

If you run ./sdk, you’ll see the usage list below:

![CLI](/img/05-cli.png)

Using this as the entry to our projects has huge benefits. Now new project team members can use `./sdk run` to have the entire project’s dependencies installed on their machine and project up and running for development. The first run will take a few minutes to download MSSQL, dotnet tools, restore npm and NuGet and all the way through to running webpack, but from there it is cached and reused, taking seconds.

## Summary
For now, I’m using docker for production deployments, consolidating our continuous integration environment, running full development environments for designers and frontend developers and using it to distribute project infrastructure across all team members in a better way.

As you can see, most of my initial goals have been met! Unfortunately, I don’t feel using docker for .NET development is quite there yet. The primary issue is file I/O performance between the host file system and the container. Using [docker-sync.io](http://docker-sync.io/), I was able to get the performance on Mac OS X to be very close to native with minimal friction, but unfortunately it is not an option in its present state for Windows. What this means, at least for our team, is that developers on Windows machines can get a database, cache and other pieces of the infrastructure through docker, but they run a second shell session for .NET compilation and debugging (*./sdk run-web*). As far as compromises go, I’d say that is pretty good!

There is a lot of traction from both Docker and Microsoft around improving performance in development. I’m excited to see what happens in coming months!

If you haven’t already, head over to our example [GitHub repository](https://github.com/AndcultureCode/docker-dotnet-example). All of the files referenced above can be found there. Any questions, comments and commits are very welcome!