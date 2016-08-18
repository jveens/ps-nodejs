Node uses callbacks for Asynchronous code.

First value passed to callback is an error/

It's very common to use anonymous functions as callbacks, otherwise we would likely have many functions that are only used once.


## Modules, Require, NPM

### Using modules in your application
	The require function allows you to use modules. require( 'file ')
	A model which instanciates an object is usually capitalized.

### Three most common sources of node modules
	1. Built-in modules are pre-packaged with Node
	are required by a simple string identifier
	sample of modules (built-in) include:
		fs, http, crypto, os (see http://nodejs.org/api)

	OS is a module that will give you info about the host your script is running on

	2. In a project, each .js file is a module. 
	You can assign a value to a module.exports variable.

	3. NPM registry (npm install)
	After download, you can require these in the same way as built in modules


### Creating and publishing your own modules

	include a package.json file

	'npm publish .' <-- to publish a module
	After publishing, it's a good idea to install and use your module in a new directory, to verify it's working. 

## Events and Streams

### Callbacks vs. Events
	A way to implement async, non-blocking code. Can also be achieved using events.

	'on' function gives access to events, such as 'item', 'done', 'error'

	Callbacks - Request/Reply model
		- no results until all results are returned
		- either error OR results

	Events - Publish/Subscribe modeal
		- act on results as they arrive
		- partial results before error

### Node's EventEmitter Class
	The publisher emits an event.
	The subscriber listens for the event.
	An event can be any string.
	When emitting an event, you can include any number of arguments.

	2 common patters:
		1. Return value from function call
		2. Object extends event emitter to emit events themself




### Patterns for using EventEmitters
### Readable and Writable Streams

	ReadableStreams:
		- readable (boolean)
		- events 'data', 'end', 'error', 'close'
		- functions pause(), resume(), destory(), pipe()

	Writeable:
		- writable (boolean)
		- events 'drain', 'error', 'close', 'pipe'
		- functions write(), end(), destroy(), destorySoon()

### Piping between streams

## Accessing Local Systems
#### Node's process object
	- available by default
	- a colletion of streams
	- access attibutes of the current process
	- acess to process-related actions
	- an instance of EventEmitter


#### Interacting with the file system
	- Stream oriented function
		fs.createReadStream()
		fs.createWriteStream()
	- Watch a file or direcotyr for changes
		fs.watch() returns an fs.FSWatcher (EventEmitter)
		'change' event
		'error' event

		
#### Buffers
#### The OS Module

Module 5 Interacting with the Web
- Use node as a web client
	- Making requests in node
	- We'll use http ( require( 'http' ) );
	- var req = http.request( options, function(result) {
		// process callback
	});
		- options can be a URL string, or an object specifying values for host, port, method, path, headers, auth, etc.
		- response is a readable stream


- Use node as a web server
	- can create a server with http.createServer
	- will not process http requests until the listen function is called
	- each request is provided as either a callback or an event on the server object
	- the ServerRequest can be read from for POST uploads
	- the ServerResponse can be piped to when returning stream oriented data in a response
	- support for SSl is by another module (https)
- Real time integration with Socket.io


## Assert is a built in node module, but must be required
	- test module