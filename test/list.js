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
