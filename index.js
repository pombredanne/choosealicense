#!/usr/bin/env node

var osmosis = require('osmosis'),
	license = process.argv[2];

if (!license) {
	console.error('You must provide an argument with the license name!');
	return;
}

osmosis
	.get('http://choosealicense.com/licenses/' + license)
	.set({
		'text': '#license-text'
	})
	.data(function (data) {
		if (data && data.text) {
			process.stdout.write(data.text);
		} else {
			console.error('Invalid license name!');
		}
	})
	.error(function (err) {
		console.error('Unexpected error!');
	});
