# generator-cozen-angular 
[![Software License][license-image]](LICENSE) [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![devDependencies Status][daviddm-dev-image]][daviddm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Maintainability][code-climate-maintainability-image]][code-climate-maintainability-url] [![Test Coverage][code-climate-coverage-image]][code-climate-coverage-url]
> Use this yeoman generator to help you create AngularJS applications based to works properly with the Altran Angular Library.

## Installation

If you're on Windows, do yourself a favor and use [cmder](http://cmder.net/) instead of `cmd.exe`.

First, install [Yeoman](http://yeoman.io) globally and the generator-cozen-angular globally using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-cozen-angular
```

Then generate your new project:

```bash
yo cozen-angular [--skip-install]
```

**Note:**  
For now, the link to `cozen-angular-lib` is private.  
The `grunt serve` task will not works.  
This is a temporary situation, the lib will be pushed to the public in a few.

To list all sub-generators and run them faster:

```bash
yo cozen-angular:help
```

To create or update a new generator config:

```bash
yo cozen-angular:config
```

To create a new view:

```bash
yo cozen-angular:view
```

To create a new service:

```bash
yo cozen-angular:service
```

To create a new controller:

```bash
yo cozen-angular:controller
```

To create a new filter:

```bash
yo cozen-angular:filter
```

To create a new constant:

```bash
yo cozen-angular:constant
```

To create a new provider:

```bash
yo cozen-angular:provider
```

## Contributing

Check out the [Contributing](CONTRIBUTING.md) file.

## Built With

* [Yeoman](http://yeoman.io/) - The Web's scaffolding tool for modern webapps

## Getting To Know Yeoman

* Yeoman has a heart of gold.
* Yeoman is a person with feelings and opinions, but is very easy to work with.
* Yeoman can be too opinionated at times but is easily convinced not to be.
* Feel free to [learn more about Yeoman](http://yeoman.io/).

## Authors

* **Geoffrey Testelin** - Front-End Developer - [C0ZEN](https://github.com/C0ZEN)

## Documentation

You can also see me [beautifully](https://c0zen.github.io/generator-cozen-angular/).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat
[npm-image]: https://badge.fury.io/js/generator-cozen-angular.svg
[npm-url]: https://npmjs.org/package/generator-cozen-angular
[travis-image]: https://travis-ci.org/C0ZEN/generator-cozen-angular.svg?branch=master
[travis-url]: https://travis-ci.org/C0ZEN/generator-cozen-angular
[daviddm-image]: https://david-dm.org/C0ZEN/generator-cozen-angular/status.svg
[daviddm-url]: https://david-dm.org/C0ZEN/generator-cozen-angular
[daviddm-dev-image]: https://david-dm.org/C0ZEN/generator-cozen-angular/dev-status.svg
[daviddm-dev-url]: https://david-dm.org/C0ZEN/generator-cozen-angular?type=dev
[coveralls-image]: https://coveralls.io/repos/github/C0ZEN/generator-cozen-angular/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/C0ZEN/generator-cozen-angular?branch=master
[code-climate-maintainability-image]: https://api.codeclimate.com/v1/badges/f44fecff6e1c0ba26bf9/maintainability
[code-climate-maintainability-url]: https://codeclimate.com/github/C0ZEN/generator-cozen-angular/maintainability
[code-climate-coverage-image]: https://api.codeclimate.com/v1/badges/f44fecff6e1c0ba26bf9/test_coverage
[code-climate-coverage-url]: https://codeclimate.com/github/C0ZEN/generator-cozen-angular/test_coverage