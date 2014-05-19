var chai = require('chai');
var expect = chai.expect;

var functions = require('../index.js');
var setReminder = functions.setReminder;

describe('setReminder()', function() {
	it('executes a callback', function(done) {
		var date = new Date()
		setReminder(date, done); 
	});
});
