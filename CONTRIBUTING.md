# Contributing to AngularJS boilerplate

Thanks for taking a time to contribute!

## Appliction specification

### Files structure

 * **/index.html** — entry file for browsing the application
 * **/app** — destination folder for builded files
 * **/src** — code of the application
 * **/src/components** —  custom Angular components
 * **/src/modules** —  other custom components

## Code specification

### Angular components

Each Angular component should follow rules listed below

 * Angular `module` should return a string containing an **id** (name) of the module
 * All kind of Angular `services`, `components`, `directives`, `controllers` and `filters` should return an object with its **id** (name) and the containing **module** id

