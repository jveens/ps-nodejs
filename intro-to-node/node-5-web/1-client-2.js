// require built in module
var http = require( 'http' );

var options = {
	host: 'www.google.com',
	port: 80,
	path: '/',
	method: 'GET'
};

console.log( "Going to make request..." );

var req = http.request( options , function(response) {

	console.log(response.statusCode);
	response.pipe(process.stdout);

});

// to invoke the request you have to call end
req.end();