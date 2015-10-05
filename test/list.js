var test = require('tape'),
	list = require('../lib/list'),
	get = require('../lib/get');

test('list licenses', function (t) {
	list(function (err, list) {
		t.notEqual(list, undefined, 'Licenses list must be defined.');
		t.notEqual(list, null, 'Licenses list cannot be null.');

		if (list) {
			t.notEqual(list.length, 0, 'Licenses list must have at least one element.');
		}

		t.end();
	});
});

test('list ID is valid', function (t) {
	list(function (err, list) {
		t.notEqual(list, undefined, 'Licenses list must be defined.');
		t.notEqual(list, null, 'Licenses list cannot be null.');

		if (list) {
			t.notEqual(list.length, 0, 'Licenses list must have at least one element.');

			get(list[0].id, function (err, text) {
				t.notEqual(text, undefined, 'License text must be defined.');
				t.notEqual(text, null, 'License text cannot be null.');

				if (text) {
					t.notEqual(text.length, 0, 'License text length must not be zero.');

					if (text.indexOf(list[0].name) != -1) {
						t.pass('License text is correct.');
					} else {
						t.fail('Failed to download license or license text is not correct!');
					}
				}

				t.end();
			});
		} else {
			t.end();
		}
	});
});

test('list should contain MIT license', function (t) {
	list(function (err, list) {
		var found = false;

		list.forEach(function (item) {
			if (item.id === 'mit') {
				t.pass('List contain MIT license.');
				t.equal(item.name, 'MIT License', 'License name is correct.');
				found = true;
			}
		});

		if (!found) {
			t.fail('List does not contain MIT license.');
		}

		t.end();
	});
});
