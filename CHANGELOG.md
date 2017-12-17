# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).  
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- Languages files for view generator
- New common module for user stuff (to get firstname and lastname)

### Changed
- Only one file for state but conditions in it
- Removed the check on isThisYou to increase the coverage
- Removed the prefix `app/views` for the view tests and for the writing step
- Refactored the path for view by adding a new input. This is not a good way to do it but I don't have any other solution due to .yo-rc.json file which rewrite the current yo path
- Removed the store option on the author input
- The default values on the author inputs are now from the config and from git if not set
- Readme to add a new section about the view sub-generator

## [0.4.1]
### Added
- Docs folder, Code of conduct, issue template and pull request template by merging the master into the develop
- Abstract state option
- Name state option

## [0.4.0]
### Added
- New constructor methods `logHintsMultiline` to print logs with break line instead of new line
- New generator `view` to create a new view in the views folder

### Changed
- Removed npm debug log
- Disabled `key-spacing` rule for eslint
- Saved all prompts into the yeoman config for later usage
- Changed `configuring` method placement in the index
- Refactored the prompt steps to assure consistency of hints, new lines and syntax
- Moved the utils files (colors, utils) in the common folder
- Removed the constructor and exported all the logs utils functions into a new logs module in common folder
- Moved the partial folder in the common folder
- Added detailed explanations on how to commit in the [CONTRIBUTING](CONTRIBUTING.md) file

### Fixed
- Wrong theme name `cozen-portail-france` replaced by `altran-portail-france`

## [0.3.1]
### Fixed
- Error with unresolved npm package for the test

## [0.3.0]
### Changed
- Description
- Added _ prefix to gitignore to avoid missing file with npm
- copyFileTpl refactoring
- Refactoring the hints with array of hints to reduce code
- Added partial view to generated the header

## [0.2.1]
### Changed
- Code Climate badge tokens

## [0.2.1]
### Changed
- Rename altran references to cozen.

### Fixed 
- Missing imported files error with npm due to 'package.json' file into the app folder

## [0.1.8]
### Added
.npmignore file

### Changed
- README.md updated
- Updated the package.json to fix error with npm publish

## [0.1.7]
### Added
- load-grunt-config as npm dependency for the generator

### Changed
- Complete refactoring of the Gruntfile. A new folder `grunt` was created. Each config and task have now it's own folder.

## [0.1.6]
### Changed
- Set up back only master build for Travis CI
- Gruntfile refactoring of similar options configuration
- markdownlint config

### Fixed
- Wrong Code Climate Es Lint path

## [0.1.5]
### Added
- Support for code coverage between Travis and Code Climate (experimental)

### Changed
- Travis config to use the coverage properly
- Jest config to save coverage report

### Fixed
- Removed some useless functions
- Removed config const like debug and skipInstall which are no longer useful
- Removed functions with if/else
- Stuff to reach 100% of cover

## [0.1.4]
### Added
- .codeclimate.yml file to configure Code Climate

### Changed
- writing/main.js is now split in main/markdown/linter/json files [Issue #9](https://github.com/C0ZEN/generator-cozen-angular/issues/9)
- inputs/appName.js is now a class to split the method in half [Issue #10](https://github.com/C0ZEN/generator-cozen-angular/issues/10)
- inputs/author.js is now a class to split the method in half [Issue #11](https://github.com/C0ZEN/generator-cozen-angular/issues/11)

## [0.1.3]
### Changed
- Colors are now imported from another class
- Utils shortcuts methods are now imported from another class instead of been declared in the constructor
- Inputs methods are now imported from other files as methods
- Writing methods are now imported from other files as methods
- Complete refactoring of the index.js file

## [0.1.2]
### Added
- New badge for MIT License
- New badge for CodeClimate maintainability
- New badge for CodeClimate test coverage

### Changed
- The method install in index.js now call npm and bower private methods
- The colors are now imported from colors module
- The npm modules are now imported from npm module
- The bower modules are now imported from bower module

## [0.1.1]
### Changed
- coveralls badge 
- Link to my profile in the Readme
- Limit the build to master only for travis

## [0.1.0]
### Added
- CHANGELOG.md
