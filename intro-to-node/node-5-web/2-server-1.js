// require built-in modules
var fs = require('fs');
var http = require('http');

// the callback function will be invoked on each request
http.createServer( function( request, response ) {

	response.writeHead( 200, {'Content-Type': 'text/plain'});

	// check the url, if it's file.txt we're going to open a 
	// readable stream and pipe to the response
	if (request.url === '/file.txt') {
		// __dirname is a variable that will tell us the directory that the 
		// script is running in
		fs.createReadStream( __dirname + '/file.txt').pipe( response );
	} else {
		response.end( 'Hello World' );
	}

// listen is chained to the end of the createServer
}).listen( process.env.PORT, process.env.IP );

console.log( 'Server Running!' );
