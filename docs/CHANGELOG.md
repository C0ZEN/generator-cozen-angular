# generator-altran-angular 
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
