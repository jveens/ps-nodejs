# Why use npm?

1. Track dependencies
2. Write simple scripts
3. Publish packages

Check for updates here: https://github.com/joeeames/NPMPlaybookCourse

## NPM basics

Modules vs Packages
	- Module - single JS file with reusable structure
	- Package - Directory with 1 or more modules and a package.json file

$ npm install will install the package and dependancies.

We can look at the package.json to see if it has a start or test script
$ npm start
$ npm test

Getting help with NPM
$ npm -h 				// for general help
$ npm help <command> 	// specific help for command
$ npm help-search 		// search for help

docs.npmjs.com/misc/config // list out a lot of shorthand commands that are handy

Types of porjects:
	1. For Users (site or application)
	2. 3rd Party Package (for other devs to use)

Use a package.json
	1. Track dependencies
	2. Create scripts

To create a package.json: $ npm init
$ npm init -y 		// create a package.json with all default options

$ npm set-init-<setting> 			// set a new default option
$ npm get-init-<setting>			// check a default setting
$ npm config delete init-<setting>  // reset a default setting

You can view all these files in: root/Users/Owner/.npmrc

All you need to install a package is the name of the package: 
$ npm install <package name>

To save a dependancy: 
$ npm install <package name> --save
$ npm install <package name> -S
$ npm i <package name> -S

To save a dev dependancy:
$ npm i <package name> --save-dev
$ npm i <package name> -D

To list your packages and dependancies: 
$ npm list
$ npm list --depth 1 		// only show 1 level deep (0 shows only installed packages, no depencies)
$ npm list --global 		// show global packages and dependencies
$ npm list --long			// show package information

To install a package globally: 
$ npm i <package name> -g
$ npm list -g --depth 0 	// show all global packages (no dependencies)

To uninstall a package:
$ npm uninstall <package name> --save // -S does not work!
$ npm un <package name>

To uninstall a global package: 
$ npm un <package name> -g

By default, the most recent version on a package will be installed.
But sometimes we want to install a specific version: 
$ 1.8.3 	// 1 is major, 8 is minor, 3 is patch

Patch versions do not add functionality
Minor versions do not break functionality, but add new functionality
Major versions are not backwards compatible

Install a specific version:
$ npm i <package name>@1.4.0

<!-- ^ indicates the major version -->
<!-- ~ indicated the minor version -->

To install a specific major version:
$ npm i <package name>@"4"

To ensure that npm will not ever upgrade your package, save with flad --save-exact
$ npm install <package name> --save --save-exact

Updating packages
$ npm update 					// installs most current compatible version
$ npm update <package name> 	// updates a specific package
$ npm update -g <package name> // updates a specific global package


## Advanced NPM

Installing from github or another url:
$ npm install <url path>

Installing a gist as a modules:
$ npm i gist:<gist hash number>
The gist must have a package.json!

Installing private packages:
$ npm i <local or network path to package>

Remove packages that are installed but not in your package.json:
$ npm prune
$ npm prune --prod 	// removes all dev dependencies

To look at package site or repo:
$ npm repo <package name>

Upgrading NPM:
$ npm i npm@latest -g 	// MUST BE EXECUTED AS ADMIN

Using Simple Scripts:
You can run test or start scripts through npm by including them in your package.json.
"test" : "node test.js" // will run test.js 
"start" : "node start.js"
The script section is like a list of prompts a dev can use to perform tasks with your package.


## Publishing on NPM