---
createPage: true
templateKey: blog-post
title: does your car speak dog?
author:
- Evan Keller
date: 2014-04-30
featured: false
featuredColor: -violet-blue
featuredImage:
  image: /img/blog/blog_featured_image.jpg
  description: "welcome to andculture"
tileImage:
  image: /img/post_car_speak_dog.jpg
  description: "does your car speak dog tile image"
postImage:
  image: /img/header_car_speak_dog.jpg
  description: "does your car speak dog header image"
seo:
  metaTitle: does your car speak dog? | andculture
  metaDescription: How smart are our devices, really? Are we taking full advantage of the opportunity to bring them together with a common language?
  socialShareCopy: How smart are our devices, really? Are we taking full advantage of the opportunity to bring them together with a common language?
category: "Design/UX"
---
Last week, I put a Jawbone UP24 on my wrist as part of a new, internal andculture project. It's a lot of fun plugging things together, but the more devices I connect lately, the more I question just how "smart" they really are and if we are taking full advantage of the opportunity we have right now during the device genesis.

As we create new things and give them protocols to communicate, let’s go one step further and also give them context and preferences.

For those unfamiliar with it, the UP24 is one of the latest quantified-self devices available in the exploding market stemming from the internet-of-things. It's basically a fancy motion sensor that pairs with my smartphone to tell me interesting things about my daily activity and sleep patterns. Using the companion app, I can also bind the sensor data to various triggers—turning the lights on when I wake up, or texting my family when I leave work.

## Wolfram Alpha
30 years ago, a man named Stephen Wolfram started working on his life’s work. His company, Wolfram Research, created the [Wolfram Alpha computational engine](https://www.wolframalpha.com/). Chances are you have used this engine as part of various services and not even known it. For example, if you or someone near you has an iPhone, try asking Siri, "How many calories are in a small apple?" Wolfram will tell you there are 75. Sometimes Siri looks it up using Bing, sometimes she just asks Wolfram. You can even force Siri to ask Wolfram by asking, “Wolfram, what is the airspeed velocity of an unladen swallow?”

## Jenkins
In our development process at andculture, we use [Jenkins CI server](http://jenkins-ci.org/). Jenkins is like a robot team member who watches what we’re doing and helps us with the grunt work. Remember Clippy in Microsoft Word?

Not like that.

Have you seen Robert Downey, Jr. talking to Jarvis (his computer) in the movie Iron Man? More like that.

## HipChat + Jenkins
In our office, we use HipChat for inter-office chat. We connected Jenkins to HipChat so that we could talk to him/it like a real person. Now we can ask Jenkins to do really useful things like merge our code, test and deploy it to the staging server just by chatting “@jenkins deploy staging.” **There is something simple and fun about using natural language to communicate with complex, technological things.**

## HipChat + Jenkins + Wolfram Alpha
While having some [nerd] fun one evening, Winton Deshong, our senior solutions architect, connected Jenkins to the Wolfram Alpha computational engine. So now Jenkins can ask Wolfram complex questions and get instant answers. At first we were having a blast asking Jenkins all sorts of nerd questions like, “What is the possibility of successfully navigating an asteroid field?” to which Jenkins immediately responded with:

*“3720:1 (Approximately; according to C-3PO in Star Wars: Episode V - The Empire Strikes Back, to which Han Solo replies, "Never tell me the odds.”)"*

As the days and weeks passed, however, many of us began utilizing the Hipchat/Jenkins/Wolfram chain to give us fast answers to work-related questions. You can ask computational questions like the square root of 5.89, or conversion questions like 10 teaspoons to liters. You can ask the population of a city, or all the cities in a region. More related, you can ask the page rank of a client’s website versus their top competitor’s. Most of the time you get an instant response.

## Connected things + standard protocols
The internet-of-things and the rise of the “global brain” are [all the buzz right now](https://www.linkedin.com/today/post/article/20140324231842-19748378-state-of-innovation-the-global-brain-comes-online). Everyone knows the smart home thermostat Nest was [acquired by Google](http://techcrunch.com/2014/01/13/google-just-bought-connected-device-company-nest-for-3-2b-in-cash/) for $3.2 billion dollars. The land rush has started and there is a new connected thing every day. There’s a [smart sock](http://www.owletcare.com/) to mind your baby’s health, or a [watch to keep track](https://www.indiegogo.com/projects/hereo-the-first-gps-watch-designed-for-young-kids) when they venture out of the nest. Here’s a discovery [navigational device for cyclists](http://hammerhead.io/). Goji turns cardio into an [interactive game](http://bluegoji.com/). There’s even a [toaster named Brad](http://www.wired.co.uk/news/archive/2014-03/18/addicted-toaster) that will sell itself if you don’t pay it enough attention.

**As the number and complexity of these devices increases, the protocol—or the way they communicate—becomes more important. They need to speak a common language.**

In the '70s-’80s, vehicle manufacturers began embedding simple computer monitors that could “communicate” what various internal sensors reported. Volkswagen cars spoke one language, GM vehicles spoke another. In the '90s, standards were adopted by nearly all vehicle manufacturers. Since then, as you can imagine, the complexity of information that vehicle computers track has exploded. But, as they all speak basically the same OBD (on-board diagnostics) language, almost any service shop can plug into any car and listen to what the car has to say.

Because of these open communication standards, new devices like [Automatic](http://www.automatic.com/) can connect your vehicle to your smartphone and communicate information, like how hard you break and accelerate via engine codes that the Automatic phone app can translate.

Major players like AT&T, Cisco, GE, IBM and Intel recently joined a consortium aimed at creating standards for things to communicate. The example given was oil refineries and harbors. This is a good sign since there are clearly competitive arms of all of these firms sitting at the same table. Hurray for open standards.

## Symbolic language
**Here’s another clear opportunity: the open language that devices speak should be built upon real-world properties embedded in the device.**

Your vehicle now speaks the same language as every other vehicle, but the words it uses don’t mean much; they always require translation. So, when your vehicle says something like “P0300,” the Automatic app knows that means “Random Misfire Detected” and can translate it into an error alert we can act on. But without Automatic, “P0300” really doesn’t mean anything to you, me or any other system.

At the heart of the Wolfram Alpha computational engine is a new kind of language, a “symbolic language.” Stephen Wolfram explains, “vast amounts of knowledge about how to do computations and about the world is built right into the language.” [Check it out](https://www.youtube.com/watch?v=_P9HqHVPeik).

Yes, Wolfram has their own proprietary way of doing this using millions of lines of code and custom dictionaries. What we like about their model, however, is that their symbolic representation of everything incorporates the inherent properties of each thing. So, thousands of properties like location, height, weight, temperature&mdash;even emotional state&mdash;are commonly understood by the system/language.

This means that not only can you ask Wolfram the height of a giraffe (5.5 meters), you can ask Wolfram to divide the Eiffel Tower by the Great Pyramid. Wolfram knows that the Eiffel Tower and the Great Pyramid are both physical structures that have a notable height property (a property which can be divided). Therefore, it will tell you the ratio of their height is 2.33. While this is a simple, contrived example, it illustrates a powerful concept.

## Connected things + standard protocols + symbolic language = awesome
When connected things speak the same language using standard protocols, your vehicle can talk to your house, your dog’s collar and your smartphone. That’s step one.

When they share and understand common properties, however, the possibilities for useful interaction greatly increase. Objects seemingly come to life by communicating both their common sensor data and their intrinsic “preferences” related to this data.

So, picture this.

Due to the warm weather crowds, it is taking longer than you expected in the store. Your car knows your dog is inside the car because they share a common property of location and they can communicate. They also share a common property of temperature. Specifically, your breed of dog has an ideal temperature range of 60-70°F while your breed of car can easily sustain internal temperatures over 110°F. Therefore, as the car’s internal temperature approaches 80°F it lowers the windows a bit to better accommodate the dog. Your dog and your car also share a property of moisture, and while the dog is less sensitive to moisture, your car’s upholstery is not. Having the windows down is going to be an issue. So when your car learns a summer thunderstorm is rolling in via connected weather data, it slowly closes the windows, starts the car, arms the alarm, and kicks on the AC to lower the internal temperature instead.

Now *that’s* what I call *smart*.