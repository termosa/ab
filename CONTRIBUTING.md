# Contributing to AngularJS boilerplate

Thanks for taking a time to contribute!

## Appliction specification

### Files structure

 * **/index.html** — entry file for browsing the application
 * **/app** — destination folder for builded files
 * **/src** — code of the application
 * **/src/components** — custom Angular components
 * **/src/modules** — other custom components
 * **/src/vendors** — files that creates a layer above 3rd party libraries to make them compatible with the application environment
 * **/src/statics** — libraries that can't be installed via package managers

## Code specification

### Angular components

Each Angular component should follow rules listed below

 * Angular `module` should return a string containing an **id** (name) of the module
 * All kind of Angular `services`, `components`, `directives`, `controllers` and `filters` should return an object with its **id** (name) and the containing **module** id

