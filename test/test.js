var test = require('tape'),
	get = require('../lib/get');

test('no arguments', function (t) {
	get(null, function (err) {
		t.notEqual(err, null, 'No error message for program without arguments!');
		t.end();
	});
});

test('invalid license', function (t) {
	get('lolcats', function (err) {
		t.notEqual(err, null, 'Something went wrong with an invalid license name!');
		t.end();
	})
});
