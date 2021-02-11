---
createPage: true
templateKey: blog-post
title: mobile architecture with Xamarin
author:
- Mike Koser
date: 2017-10-11
featured: false
featuredColor: -violet-blue
featuredImage:
  image: /img/blog/blog_featured_image.jpg
  description: "blog header"
tileImage:
  image: /img/post_default_dark_4.jpg
  description: "blog header"
postImage:
  image: /img/header_default_dark_4.jpg
  description: "blog header"
seo:
  metaTitle: mobile architecture with Xamarin | andculture
  metaDescription: At andculture, we wanted to make sure our mobile architecture was scalable, testable and maintainable. We decided to go with Xamarin.
  socialShareCopy: At andculture, we wanted to make sure our mobile architecture was scalable, testable and maintainable. We decided to go with Xamarin.
category: "Engineering"
---
At andculture, we constantly strive to improve our development workflow. As we continued to develop more mobile applications for clients, we wanted to make sure we architected our solutions in a way to make them scalable, testable and maintainable. We iterated over a couple of different approaches with each new project and have cultivated an architecture we’re pleased with.

## Our mobile architecture goals
* Develop a mobile application across iOS and Android platforms with maximum code reusability
* Minimize development time from platform to platform without sacrificing UX and performance
* Make it testable
* Loose coupling/high cohesion

## The nobile development landscape

**Hybrid Apps**

Platforms like PhoneGap and Titanium allow developers to write web apps in HTML, Javascript and CSS and wrap them in a native app.

Pros:

* Familiar development if background is in web
* Minimized development time: same code is used across all platforms

Cons:

* UX - It can be more challenging to ensure that environment-specific best practices and design guidelines are used since application code is written without the use of native controls.
* Performance - Hybrid apps will never be able to outperform native apps. They are not able to use hardware acceleration as extensively as native apps since they are contained within a native environment’s web view.

**Progressive Web Apps (PWAs)**

Pros:

* Familiar development if background is in web
* No need to publish through an app store, since they are web applications
* Are able to use some native capabilities (push notifications, camera, microphone, GPS)

Cons:

* Not all hardware capabilities are available
* UX - It can be more challenging to ensure that environment-specific best practices and design guidelines are used since application code is written without the use of native controls.
* Limited support - iOS does not support many of the features of PWAs, so user experience suffers from this as well.

**Native compilers (e.g., Xamarin, Ionic, React Native)**

Pros:

* Write native solutions across platform using the same language
* Allows reuse of common code elements (e.g., models, data access, services, business logic)
* Able to tailor the UI to the guidelines of each OS

Cons:

* Minor delays on platform-specific software development kits (SDKs)
* Some restrictions on third-party libraries
* Potentially larger app sizes

## Our decision

We decided to structure our mobile architecture around Xamarin. The majority of our developers have the bulk of their experience working in the Microsoft .NET stack, so it made the most sense. We could write in a language we’re familiar with without sacrificing performance and user experience.

## Architecture

Code separation and loose coupling are key in order to allow the different areas within an app to be testable and maintainable. It also happens to play very well in Xamarin since we want to maximize the code reusability between platforms. If we lumped all the code within each native project, it would prohibit us from being able to share common code between the various mobile environments. In order to maintain this separation, we make extensive use of the [Onion Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/).

Our solution is broken up into the following categories:

* **Core** - Includes core models and interfaces as well as business logic
* **Presentation** - Includes iOS and Android project types
* **Testing** - Includes testing projects across for core and presentation projects

**Core**

*Mobile.Core*

Includes:

* Interfaces used throughout all projects
* Concrete implementation of most entities (e.g., data transfer objects, models)
* Shared enumerations

*Mobile.Services.Http*

Contains web service implementations (e.g., REST APIs)

*Mobile.Services.Realm*

Implementation of local Realm database access.

Includes:

* Concrete implementations of Realm entities, implementing entity interfaces from Mobile.Core
* Implementation of CRUD operations from service interfaces defined in Mobile.Core

*Mobile.ViewModels*

Uses MVVMCross to manage viewmodels that are bound to views in native UI projects (e.g., iOS, Android). The properties defined in a viewmodel are bound to properties on UI controls. The viewmodels make calls to Mobile.Services.Http and Mobile.Services.Realm as needed. The viewmodels can also take on the responsibility of navigation and common UI tasks (alert modals and process dialogs).

**Presentation**

*Mobile.iOS*

UI implementation of the app for iOS devices. MVVMCross viewmodels are bound to view controllers. Each view controller then binds UI controls to properties from the bound viewmodel.

Includes:

* ViewController - A view controller represents a "screen" in the app. Each screen is broken into 3 partial class files. The layout and presenter partial class files are nested under the view controller class file.
* View Controller - Calls initialize methods in presenter and layout files. Handles controller events (e.g., view did load, view did appear, etc.). Includes concrete implementations of view event handling. Example file name: MainViewController.cs
* Presenter - Responsible for creating and configuring all of the views (controls) that the screen requires. Wires up view events and binds data to UI elements via MVVMCross. Example file name: MainViewController.presenter.cs
* Layout - Responsible for positioning UI elements on the screen (via auto layout constraints). Example file name: MainViewController.layout.cs
* Views - Any custom UI elements that the application requires are managed here (e.g., custom textbox input).

*Mobile.Android*

The UI implementation of the app for Android devices. MVVMCross viewmodels are bound to activities/fragments based on name. For example, if there is a viewmodel named MainViewModel, then the activity/fragment that you want to bind to it should be named MainView. Controls are bound to MVVMCross using the attribute local:MvxBind directly on views in layout (axml) files. For example, if you want to bind the Text property of a TextView to a property on a viewmodel called Name, you would add an attribute to the TextView like this: local:MvxBind="Text Name".

*Mobile.Svg*

Includes SVG resources that are used in both iOS and Android presentation projects.

**Tests**

*Mobile.ViewModels.Tests.iOS*

An iOS test runner application that executes the tests created in Mobile.ViewModels.Tests.Shared.

*Mobile.ViewModels.Tests.Android*

An Android test runner application that executes the tests created in Mobile.ViewModels.Tests.Shared.

*Mobile.ViewModels.Tests.Shared*

Includes all ViewModel test implementations. It is referenced by the platform-specific test runner projects.

## Conclusion
As we continue to build out solutions, we evolve our architecture in an effort to continually improve our code reusability and testing strategy. We’re not saying that our architecture will work for everyone, but it meets our needs. If you want to use our architecture for your own mobile solution, you can download/clone it [here](https://github.com/AndcultureCode/Xamarin-Architecture). If you have any feedback or suggestions, please feel free to log an issue. We appreciate your time and support!