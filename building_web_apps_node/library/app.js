var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

var port = process.env.PORT || 5000;

// set up middleware
app.use(express.static('public'));
app.set('views', './src/views');


//// use jade
// app.set('view engine', 'jade');

//// use handlebars
//app.engine('.hbs', handlebars({extname: '.hbs'}));
//app.set('view engine', '.hbs');

// use ejs
app.set('view engine', '.ejs');


// set up routes
app.get('/', function (req, res) {
	
	res.render('index', {title: 'Hello from render', list: ['a', 'b'] });
	
});
app.get('/books', function (req, res) {
	
	res.send('Hello Books');
	
});

app.listen(port, function (err) {
	
	'use strict';
	
	console.log('Running server on ' + port);
	
});