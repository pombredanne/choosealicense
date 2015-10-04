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

test('mit license', function (t) {
	get('mit', function (err, text) {
		if (text.indexOf('The MIT License (MIT)') != -1) {
			t.pass('MIT license downloaded successfully.');
		} else {
			t.fail('Failed to download MIT license or license text is not correct!');
		}
		t.end();
	});
});
