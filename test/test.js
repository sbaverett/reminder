var chai = require('chai');
var expect = chai.expect;

var setReminder = function(date, cb) {
	setTimeout(cb, 100);
};

var date = new Date();

describe('setReminder()', function() {
	it('executes a callback', function(done) {
		setReminder(date, function() {
			done();
			expect(date).to.eql(date);
		});
	});
	
});