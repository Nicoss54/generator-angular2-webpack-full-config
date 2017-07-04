# Starter Angular with webpack config

A yeoman generator, letting you to create easely an angular (version 4) web application with webpack (version 2) as module bundler

[![node](https://img.shields.io/badge/node-v6.10.2-blue.svg)]()
[![npm](https://img.shields.io/badge/npm-5.0.4-blue.svg)]()
[![angular](https://img.shields.io/badge/angular-v4-blue.svg)]()
[![webpack](https://img.shields.io/badge/webpack-v2-blue.svg)]()
[![build](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![dependencies](https://img.shields.io/badge/dependencies-good-green.svg)]()
[![license](https://img.shields.io/badge/license-MIT-blue.svg)]()

## Table of Contents

* [Requirements](#Requirements)
* [Installation](#Installation)
* [Struture Angular Project](#Structure)
* [Development Mode](#Development)
* [Production Mode](#Production)
* [Configuration style (css/scss)](#Configuration)
* [Add dependencies to my project](#Dependencies)
* [License](#License)


## Requirements

Starter Angular requires the folowing to run:
* Node.js: **4.x.x+**
* NPM: **3.x.x+** (normally comes with node js)
* Yo: **1.x.x+**

## Installation

 To install Node js, go to their [Home Page](https://nodejs.org/en/) 

 To install Yo, paste this command line in your favorite term:
 ```sh
 npm install -g yo
 ```

 To install this yoeman's generator, paste this command line:
 ```sh
 npm install -g generator-angular2-webpack-full-config
 ```

To launch this generator, and create your web-application, paste this command line
```sh
yo angular2-webpack-full-config
```

Finally, you must have all the necessary dependencies. For that, go to your App folder that you just created, and paste this command line
```sh
npm install
```

## Structure Angular Project

This starter project respects Angular's best practices. To organize your project with those best practices, refer to [Angular Home Page](https://angular.io/)

## Development Mode

The development mode is realized by webpack-dev-server (version 1). To launch this server, go to your app folder and paste this command line
```sh
npm start
```
This command launch the development server on port 8000 of your localhost. There is an auto reload system for saving time in your development

## Production Mode

In production mode, all the project is minified. To build your application, in your app folder, paste this command line
```sh
npm run build:prod
```

Then to deploy your application, you have two choices:
* a node server, with the framework hapi (documentation [here](https://hapijs.com/))
* a little server, easy to use: superstatic (documentation [here](https://github.com/firebase/superstatic))

To launch server in production mode with the node server, in your app folder, paste this command line
```sh
npm run prod
```
To launch server in production mode with superstatic, in your app folder, paste this command line
```sh
npm run serve:prod
```

## Configuration style (css/scss)

Now you can use sass or css to styling your application. Only difference is the method of import.

To import a sass file in a typescript file, here is an example: 
```ts
import '!style-loader!css-loader!sass-loader!path to your sass file'
```
In an angular component it's necessary to stringify your sass file,
here is the syntax
```ts
styles:[require('path to sass file').toString()]
```

To import a css file in a typescript file, here is an exemple: 
```ts
import '!style-loader!css-loader!path to your css file '
```

You can also include your sass file in the main sass file like this:
```scss
@import 'path to your sass file'
````

In an Angular component, just require your css file like this
```ts
styles:[require('path to your css file')]
```

## Dependencies

If your projet needs more dependencies you must import them in the vendor file.
Some exemples are already present in this file.

## License

generator-angular2-webpack-full-config is licensed under the [MIT](#) license.  
Copyright &copy; 2016, Nicolas FRIZZARIN
