var test = require('tape'),
	get = require('../lib/get');

test('no arguments', function (t) {
	get(null, function (err) {
		t.notEqual(err, null, 'No error message for program without arguments!');
		t.end();
	});
});
