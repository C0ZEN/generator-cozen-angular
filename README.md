# generator-altran-angular 
[![Software License][license-image]](LICENSE) [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Maintainability][code-climate-maintainability-image]][code-climate-maintainability-url] [![Test Coverage][code-climate-coverage-image]][code-climate-coverage-url]
> Use it to help you create AngularJS applications using the internal library for Altran projects.

## Installation

If you're on Windows, do yourself a favor and use [cmder](http://cmder.net/) instead of `cmd.exe`.

First, install [Yeoman](http://yeoman.io) and generator-altran-angular using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-altran-angular
```

Then generate your new project:

```bash
yo altran-angular
```

## Development

If you edit the generator, there is some npm commands to test or publish your changes.

When you want to test your changes in local, you must run the link command:

```bash
npm link
```

Then you can create a new project with `yo altran-angular`.

You can also lint and test the code:

```bash
npm test
```

When you are done, you can commit and publish the new npm package:

```bash
npm publish
```

## Npm publish fails

If something goes wrong with `npm publish`, make sure to login yourself on npm and then fill the blanks:

```bash
npm login
```

And increment the `package.json` version.

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [C0ZEN](www.geoffreytestelin.com)

[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat
[npm-image]: https://badge.fury.io/js/generator-altran-angular.svg
[npm-url]: https://npmjs.org/package/generator-altran-angular
[travis-image]: https://travis-ci.org/C0ZEN/generator-altran-angular.svg?branch=master
[travis-url]: https://travis-ci.org/C0ZEN/generator-altran-angular
[daviddm-image]: https://david-dm.org/C0ZEN/generator-altran-angular.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/C0ZEN/generator-altran-angular
[coveralls-image]: https://coveralls.io/repos/github/C0ZEN/generator-altran-angular/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/C0ZEN/generator-altran-angular?branch=master
[code-climate-maintainability-image]: https://api.codeclimate.com/v1/badges/2820041b8e9d628be0a5/maintainability
[code-climate-maintainability-url]: https://codeclimate.com/github/C0ZEN/generator-altran-angular/maintainability
[code-climate-coverage-image]: https://api.codeclimate.com/v1/badges/2820041b8e9d628be0a5/test_coverage
[code-climate-coverage-url]: https://codeclimate.com/github/C0ZEN/generator-altran-angular/test_coverage