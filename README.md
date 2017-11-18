# generator-altran-angular 
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Use it to help you create AngularJS applications.

## Installation

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

When you are done, you can publish the new npm package:

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

MIT © [C0ZEN](www.geoffreytestelin.comgeoffreytestelin.com)

[npm-image]: https://badge.fury.io/js/generator-altran-angular.svg
[npm-url]: https://npmjs.org/package/generator-altran-angular
[travis-image]: https://travis-ci.org/C0ZEN/generator-altran-angular.svg?branch=master
[travis-url]: https://travis-ci.org/C0ZEN/generator-altran-angular
[daviddm-image]: https://david-dm.org/C0ZEN/generator-altran-angular.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/C0ZEN/generator-altran-angular
[coveralls-image]: https://coveralls.io/repos/C0ZEN/generator-altran-angular/badge.svg
[coveralls-url]: https://coveralls.io/r/C0ZEN/generator-altran-angular
