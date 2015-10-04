var test = require('tape'),
	list = require('../lib/list');

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
