var assert = require('assert');
var fun = require('./mathfun');

assert.equal(fun.evenDoublerSync(2),4);
assert.throws( function() {
	fun.evenDoublerSync(3);

	// check that the error includes the word 'Odd'
}, /Odd/);

