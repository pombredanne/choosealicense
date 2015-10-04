# Choose a License

[![NPM package][nodei-image]][nodei-url]
[![Travis Build][travis-image]][travis-url]

CLI tool to choose a license for your project. It's based on [Choose a License](http://choosealicense.com/) website created by GitHub. It'll download the license file directly from their website.

# Installation

`npm install -g choosealicense`

# Usage
To list available licenses, just run it without any argument:

`choosealicense`

To get text from a desired license, pass its SPDX id as an argument:

`choosealicense mit`

The license text will be output to stdout, so you can do whatever that fits your needs.

To save the license text to a file:

`choosealicense mit > LICENSE`

# License
MIT.

[nodei-url]: https://nodei.co/npm/choosealicense/
[nodei-image]: https://nodei.co/npm/choosealicense.png?mini=true

[travis-url]: https://travis-ci.org/fmoliveira/choosealicense
[travis-image]: https://api.travis-ci.org/fmoliveira/choosealicense.svg
