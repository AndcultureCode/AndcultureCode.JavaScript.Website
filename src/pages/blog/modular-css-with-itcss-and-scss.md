---
createPage: true
templateKey: blog-post
title: modular CSS with ITCSS and SCSS
author:
- Shane Shearer
date: 2018-05-01
featured: false
featuredColor: -violet-blue
featuredImage:
  image: /img/blog/blog_featured_image.jpg
  description: "blog header"
tileImage:
  image: /img/post_default_dark_2.jpg
  description: "blog header"
postImage:
  image: /img/header_default_dark_2.jpg
  description: "blog header"
seo:
  metaTitle: modular CSS with ITCSS and SCSS | andculture
  metaDescription: At andculture, we use the ITCSS project architecture to help order CSS in the most efficient way. Breaking apart structure & files helps simplify redundant CSS.
  socialShareCopy: At andculture, we use the ITCSS project architecture to help order CSS in the most efficient way. Breaking apart structure & files helps simplify redundant CSS.
category: "Engineering"
canonicalUrl: "/blog/modular-css-with-itcss-and-scss"
---
We use the [ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) project architecture to help order CSS in the most effective and least wasteful way. The breaking apart of structure and files for ITCSS really helps to organize and simplify redundant CSS.

## Folder structure example
![ITCSS Folder Structure Example](/img/itcss-folder-structure.png)

## File separation
SCSS has the ability to leverage partial files that do not generate separate CSS files but are included into a larger file. While you can create a significant amount of files by doing this, it makes finding selectors and components much easier in a large application. An example of these partials is below.

![ITCSS Folder Structure Example](/img/itcss-code-5.png)

## Attribute order
Not all front-end developers choose to order their CSS attributes in a particular order. However, if you poll the community you will find that there are different orders which developers do use in order to maintain some consistency across the same and multiple projects. We have been using the following order of attributes:

* SCSS Mixin Includes
* Box Model Attributes
* Position Attributes
* Color Attributes
* Font Attributes
* Miscellaneous Attributes

Within each of these sections, the attributes are ordered in alphabetical order. This allows you to quickly find what you are looking for within any CSS selector.

## Naming & namespacing
One of the most difficult things to do with HTML and CSS is to come up with good naming throughout an application. There are typically a lot of different components that spread throughout a website or application, so naming can be a real challenge. It is nice to break everything up in components and represent the difference between objects and components in the application.

We have been using o- to indicate objects and c- to indicate components. This will tell you when there is certain positioning occurring on a particular component or if there is an object surrounding or included with a component.

Along with the namespacing, we also use pseudo Block Element Modifier (BEM) naming. Using this nomenclature allows you to nest elements and name things based on the component that it is under. It also allows you to apply modifiers in a way that changes the way the component looks.

## BEM component example

![ITCSS Folder Structure Example](/img/itcss-code-0.png)


## BEM object example

![BEM Object Example](/img/itcss-code-1.png)

## Settings & tools
Reusability is a key piece of creating clean and manageable SCSS/CSS. It is important to be able to look at a design and imagine all of the reusable elements that can be put in place at the very beginning of a project.

A good starting place for doing this is taking inventory of all of the colors, fonts, font sizes and other reusable areas of a design. Once you have all of these items, organizing them in a manageable fashion is extremely important for maintainability. SCSS maps can be used to aggregate the data in a key-value pair.

## Color map example

![Color Map Example](/img/itcss-code-2.png)

Once you have defined a map containing all of the colors in an application, you can then write some tools (functions) to make retrieving these items very easy. You will be using colors throughout the application in almost every component. If one of these colors changes, you can just swap out the hex value because of the name of the color is not defined in the map (e.g., blue, red, etc.).

## Color functions example

![Color Functions Example](/img/itcss-code-3.png)

## Color functions use example

![Color Functions Use Example](/img/itcss-code-4.png)