#!/usr/bin/env node

var package = require('../package'),
	get = require('../lib/get');

/* An argument is mandatory. TO DO: print a summary of license names. */
if (process.argv.length == 2) {
	console.log('You must provide an argument with the license name!')
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
