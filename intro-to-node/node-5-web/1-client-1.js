// require built in module
var http = require( 'http' );

console.log( "Going to make request..." );

var req = http.request('http://www.google.com/', function(response) {

	console.log(response.statusCode);
	response.pipe(process.stdout);

});

// to invoke the request you have to call end
req.end();