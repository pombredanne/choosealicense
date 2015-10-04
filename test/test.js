var test = require('tape'),
	get = require('../lib/get');

test('no arguments', function (t) {
	get(null, function (err) {
		t.notEqual(err, null, 'Throw an error when no arguments supplied.');
		t.end();
	});
});

test('invalid license', function (t) {
	get('lolcats', function (err) {
		t.notEqual(err, null, 'Throw an error for invalid license name.');
		t.end();
	})
});
