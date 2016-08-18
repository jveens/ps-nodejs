// require built in module
var http = require( 'http' );

var options = {
	host: 'www.google.com',
	port: 80,
	path: '/',
	method: 'GET'
};

console.log( "Going to make request..." );

http.get( options , function(response) {

	console.log(response.statusCode);
	response.pipe(process.stdout);

});

// to invoke the request you have to call end
// if we are just doing a http.get request we don't need to end
// req.end();