

var setReminder = function(date, callback) {
	setTimeout(cb, parseInt(duration));
};

var date = new Date();

describe('setReminder()', function() {
	it('executes a callback', function(done) {
		setReminder(date, function() {
			done();
		});
	});
	
});