#!/usr/bin/env node

var http = require('http'),
	license = process.argv[2];

/* Tag identifiers we're looking for. */
var tags = {
	start: '<pre id="license-text">',
	end: '</pre>'
}

/* An argument is mandatory. TO DO: print a summary of license names. */
if (!license) {
	console.error('You must provide an argument with the license name!');
	return;
}

/* Make endpoint to choosealicense.com. */
var options = {
	host: 'choosealicense.com',
	path: '/licenses/' + license + '/'
};

/* Prepare the request. */
var req = http.get(options, function (res) {
	var text = '';

	res.on('data', function (chunk) {
		text += chunk;
	});

	/* Start breaking the received data. */
	/* TO DO: check if a 404 status code is set. */
	res.on('end', function () {
		/* Look for the starting tag. */
		var idx = text.indexOf(tags.start);

		/* If starting tag was not found, it's an invalid license name. */
		if (idx == -1) {
			console.error('Invalid license name!');
			return;
		}

		/* Extract text after the starting tag. */
		text = text.substr(idx + tags.start.length);

		/* Look for the end tag. */
		idx = text.indexOf(tags.end);

		/* If no end tag was found, seems like an error. */
		if (idx == -1) {
			console.error('Error parsing license text!');
			return;
		}

		/* Extract text before the ending tag. */
		text = text.substr(0, idx);

		/* Output license text. */
		process.stdout.write(text);
	})
});

/* Print errors to the console. */
req.on('error', function (err) {
	console.error('Unexpected error!');
	console.error(err);
});

req.end();
