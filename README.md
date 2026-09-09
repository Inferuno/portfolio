# Extended Bio
This project is made for me to learn html / css (and advance my js skills). It is an extended bio that I can put on this like a youtube bio or a discord bio to contain more information than their small character limits can.

## Stack
Uses html, js, and css files + an assets folder (seperated into sub folders for organization) for images, art, etc.

## What's interesting in this project
Every color in the project derives from one hue value (`--h`),  `@property` registers it as a number so that the browser can animate it. In [script.js](script.js) it has a function (`track()`) which will change the color depending on what section you are viewing.

## Status
The project is a **work in progress**, it's not perfect (nor will it ever be). I am working on it something like every day and plan to finish in 1-2 weeks.

### Note
I am using ai for the parts I am stuck on, notably on a certain Chrome issue that made the navigation island's text flicker awkwardly. I resolved it by coming to the conclusion to just stop the 
 color animation. (and certain css properties, such as the basis of the color shifting, like `@property`).
The spring easing curve is also ai generated, same with creating the actual layout (not all of it, but most.)