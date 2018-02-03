# <%= appName %>

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

<%= appDescription %>

### Usage

## Getting Started

This project use `Grunt` to handle development and version control.

To run the local node server:

```
grunt serve
```

To create a new release folder:

```
grunt release
```

You will be able to choose between three release:

- test
- preprod
- prod

Each one have his own configuration file so that you can do whatever you want.

To create a new git tab:

```
grunt releaseBump
```

## Running the tests

## Contributing

If you want to contribute, make sure to follow the rules in the [CONTRIBUTING](CONTRIBUTING.md) file.

## Versions

Read the [CHANGELOG](CHANGELOG.md) to see the complete list of versions.

## Dependencies maintainability

This project use `npm-check-updates` to keep the dependencies easily up-to-date.

Make sure to install `npm-check-updates` as global dependency.  
Use `npm install npm-check-updates -g` to do it.

Use `ncu` to see the complete list of out-of-date dependencies.

Use `ncu -u` to update all the npm dependencies.

Use `ncu -m bower` to update all the bower dependencies.

## Authors

* **<%= authorShort %>** <<%= authorEmail %>>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.