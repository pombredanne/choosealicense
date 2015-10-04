var http = require('http'),
	regex = /<a href=\"\/licenses\/(.*)\/">(.*)<\/a>/;

module.exports = function (cb) {
	/* Tag identifiers we're looking for. */
	var tags = {
		start: '<h3 class="license-family-name">',
		end: '</h3>'
	}

	/* Make endpoint to choosealicense.com. */
	var options = {
		host: 'choosealicense.com',
		path: '/licenses/'
	};

	/* Prepare the request. */
	var req = http.get(options, function (res) {
		var text = '';

		res.on('data', function (chunk) {
			text += chunk;
		});

		/* Start breaking the received data. */
		res.on('end', function () {
			var list = [];
			var idx, family;

			/* Iterate across the text. */
			for (;;) {
				idx = text.indexOf(tags.start);

				/* No license family was found, end the loop. */
				if (idx == -1) {
					break;
				}

				/* Look for its end. */
				text = text.substr(idx + tags.start.length);
				idx = text.indexOf(tags.end);

				/* No end tag was found, end the loop. */
				if (idx == -1) {
					break;
				}

				/* Format family name. */
				family = formatFamily(text.substr(0, idx));
				list.push(family);

				/* Step to the next attempt. */
				text = text.substr(idx + tags.end.length);
			}

			/* Output licenses list. */
			cb(null, list);
		})
	});

	/* Print errors to the console. */
	req.on('error', function (err) {
		cb(err);
	});

	req.end();

}

function formatFamily(family) {
	family = family.replace(/\n/g, '');
	family = family.trim()
	family = family.replace(/\s+/g, ' ');

	var match = regex.exec(family);

	if (!match) {
		throw 'Invalid family name!';
	}

	if (match.length != 3) {
		throw 'Invalid family match!';
	}

	family = {
		id: match[1],
		name: match[2].trim()
	};

	return family;
}
