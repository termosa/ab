# Contributing to AngularJS boilerplate

Thanks for taking a time to contribute!

## Appliction specification

### Files structure

 * **/node_modules** — installed npm packages
 * **/bower_modules** — installed bower packages (changed from `bower_components` for consistency with `node_modules` directory)
 * **/index.html** — entry file for browsing the application
 * **/app** — destination folder for builded files
 * **/src** — code of the application
 * **/src/components** — custom Angular components
 * **/src/modules** — other custom components
 * **/src/vendors** — files that creates a layer above 3rd party libraries to make them compatible with the application environment
 * **/src/statics** — libraries that can't be installed via package managers

### Dependencies resolving

Dependencies have custom resolving order. Each folder has it's alias to skip this order:

| Order  | Directoty            | Alias     |
| ------:| -------------------- | --------- |
|     1. | /src/components/\*\* | component |
|     2. | /src/modules/\*\*    | module    |
|     3. | /src/vendors/\*\*    | vendor    |
|     4. | /src/statics/\*\*    | static    |
|     5. | /bower_modules/\*\*  | bower     |
|     6. | /node_modules/\*\*   | node      |

As well it is setted to resolve extensions in next order:

 0. **.js**
 0. **.css**
 0. **.html**

## Code specification

### Angular components

Each Angular component should follow rules listed below

 * Inside of */src/components* directory files are processed with `ng-annotate` library, so you don't need to define dependencies explicitly.
 * Angular `module` should return a string containing an **id** (name) of the module
 * All kind of Angular `services`, `components`, `directives`, `controllers` and `filters` should return an object with its **id** (name) and the **module** id

### 3rd party dependencies

You should keep an eye on all of required files from 3rd party libraries and add them to `noParse` directive (*config/webpack-config/skip-processing-vendors.js*) if possible.

