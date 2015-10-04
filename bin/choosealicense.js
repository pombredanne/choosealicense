#!/usr/bin/env node

var package = require('../package'),
	get = require('../lib/get'),
	list = require('../lib/list');

/* An argument is mandatory. */
if (process.argv.length == 2) {
	list(function (err, list) {
		if (err) {
			console.error(err);
			return;
		}

		console.log('Please provide an argument with the desired license ID.');
		console.log('Listing available licenses:');

		list.forEach(function (i) {
			console.log(`  * ${i.id}: ${i.name}`);
		});
	});
	return;
}

var license = process.argv[2];

/* Print module version. */
if (license == 'version') {
	console.log(package.version);
	return;
}

get(license, function (err, text) {
	if (err) {
		console.error(err);
		return;
	}

	process.stdout.write(text);
});
