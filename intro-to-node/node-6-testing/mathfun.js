var maxTime = 1000;

// if input is even, double it
// if input is odd, error
// call will take a random amount of time, but less than maxtime

var evenDoubler = function( v, callback ) {

};

var evenDoublerSync = function( v ) {
	if (v%2) {
		throw( new Error( 'Odd input') );
	} else {
		return( v*2 );
	}
};

module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = evenDoublerSync;

module.exports.foo = 'bar';

