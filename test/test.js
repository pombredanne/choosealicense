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
		t.notEqual(text, undefined, 'License text must be defined.');
		t.notEqual(text, null, 'License text cannot be null.');

		if (text) {
			t.notEqual(text.length, 0, 'License text length must not be zero.');

			if (text.indexOf('The MIT License (MIT)') != -1) {
				t.pass('MIT license downloaded successfully.');
			} else {
				t.fail('Failed to download MIT license or license text is not correct!');
			}
		}

		t.end();
	});
});

test('MIT license (uppercase)', function (t) {
	get('MIT', function (err, text) {
		t.notEqual(text, undefined, 'License text must be defined.');
		t.notEqual(text, null, 'License text cannot be null.');

		if (text) {
			t.notEqual(text.length, 0, 'License text length must not be zero.');

			if (text.indexOf('The MIT License (MIT)') != -1) {
				t.pass('Uppercase MIT license downloaded successfully.');
			} else {
				t.fail('Failed to download MIT license with uppercase license name!');
			}
		}

		t.end();
	});
});
