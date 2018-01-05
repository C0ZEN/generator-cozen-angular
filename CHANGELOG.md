# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).  
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- New partial service file

## [0.12.3]
### Changed
- Added `/` prefix before the state name default value

## [0.12.2]
### Fixed
- Changed dependencies from dev to prod

## [0.12.1]
### Added
- New npm dependency `q` to create deferred 
- New npm dependency `slash` to rewrite a path with slash instead of backslash
- New input `validate` to preview and confirm the creation of a service
- New input `edit` called when validate is false. Used to list inputs that could be edited. On select, execute the input with the default value as the value from the config. On submit, restart to with `validate` input. Fucking hell of a loop of deferred !

### Changed
- Removed all replace to by slash module to rewrite a path with slash instead of backslash 

## [0.12.0]
### Added
- New input `stateParent` for the `view` sub-generator

### Changed
- Text for hints
- Default values
- The app name is now colored on the generators which display it
- Refactored the `view` sub-generator
- Refactored the `config` sub-generator
- Refactored the `constant` sub-generator
- Refactored the `controller` sub-generator
- Refactored the `filter` sub-generator
- Refactored the `provider` sub-generator
- Refactored the `service` sub-generator

### Fixed
- Error with `undefined` path instead of string with `mainLessFile` writing for `view` sub-generator

### Removed
- Hints log header

## [0.11.0]
### Added
- New sub-generator `help` to list all available generators and run them faster

### Changed
- Changelog
- The lang input is now a list instead of a textbox
- The theme input is now a list instead of a textbox

## [0.10.0]
### Added
- New input `fileName` for the provider to customize the name of the file
- New input `fileName` for the service to customize the name of the file
- New input `fileName` for the filter to customize the name of the file
- New input `fileName` for the constant to customize the name of the file
- New input `fileName` for the controller to customize the name of the file

### Changed
- Partial header to add the name of the generator
- Added the default path as default value for the provider path
- Added the default path as default value for the service path
- Added the default path as default value for the filter path
- Added the default path as default value for the constant path
- Added the default path as default value for the controller path
- Refactored the path constructor for most of the sub-generators
- Changed the default path for the `view` sub-generator
- Refactored the path constructor for the `view` sub-generator
- Append a new line in the main.less file instead of write

### Fixed
- Error with wrong variable in the provider template
- Wrong path to edit the main.less file
- Wrong content for the path of the main.less file

### Removed
- Default callback path for the provider when the custom path is empty
- Default callback path for the service when the custom path is empty
- Default callback path for the filter when the custom path is empty
- Default callback path for the constant when the custom path is empty
- Default callback path for the controller when the custom path is empty

## [0.9.0]
### Added
- New sub-generator `provider`

### Changed
- Readme to add stuff about the new sub-generator `constant`

### Fixed
- Wrong input hint text (constant sub-generator)
- Wrong constant name

## [0.8.0]
### Added
- New sub-generator `constant` to create a constant file

### Changed
- Hint for the view path
- Renamed most of the module names to match with the file name
- Refactored some input files to bring consistency over generators
- Added new jest config property to change globally the jasmine timeout

## [0.7.9]
### Added
- Dev dependencies badge

### Changed
- Jest and Jest-CLI npm version

### Fixed
- Error with Jest new version (fewer timeout)

## [0.7.8]
### Changed
- Configuration for Jest to notify and show verbose tests 

### Fixed
[Issue #27](https://github.com/C0ZEN/generator-cozen-angular/issues/27)

## [0.7.7]
### Changed
- Refactored some useless callback values
- Refactored for coverage

## [0.7.6]
### Removed
- Node.js version 4 from Travis CI build

## [0.7.5]
### Added
- Grunt
- Grunt tasks to create a release easily and automatically (run test, change version, publish, commit and tag)

### Changed
- Docs styles and colors

### Fixed
- Timeout errors with Travis CI
- View test by adding default path for less main file when there is no config

## [0.7.4]
### Changed
- Docs styles and colors

## [0.7.3]
### Added
- Link to GitHub for the docs
- Link to the beautiful documentation on the readme

### Changed
- Favicon
- References to Altran on the Jekyll config file
- Docs styles and colors

### Fixed
- Wrong import less path for view sub-generator

## [0.7.2]
### Added
- New sub-generator view input `mainDirectory`. This is useful when you want to create a view with different file prefix and angular prefix than the directory name. e.g: login/authenticationLogin.service.js

### Changed
- Path of the docs is now in the root folder instead of the docs folder. There was no need to have a customized documentation.

### Removed
- Jasmine timeout stuff in the tests

## [0.7.1]
### Added
- New methods to manage the package.json file read and write added into config module

### Changed
- Changed the hint path for filter, controller and service sub-generators
- Created a new utils config module to handle stuff about the callback config
- The view sub-generator will now automatically update the main less file for import
- The config sub-task will now update the package file as well to store the callback config
- The version in the header is now based on the package version

### Fixed
- Error with state template (string instead of fn in config declaration)
- Error with static template path in state template

## [0.7.0]
### Added 
- Space before INITIALIZING step
- Config in the package to globalize the common data (appName) to avoid requesting it when the `.yo-rc.json` file is not present locally (which is often due to gitignore - in a good way -). So know we can assume that there is a global config and a local config.
- Merge between global and local config (the global config override the local config only when the local config properties does not exist)
- New sub-generator `filter` to create an angular
- New sub-generator `config` to update the config

### Changed
- When the user is not set in the config, the isThisYou prompt will be automatically skipped
- The areYouReady prompt show the real app name instead of the camel one
- Updated the readme about new sub-generators

## [0.6.0]
### Changed
- When the user say that he is not ready, the generator will now stop working
- All js files are now txt files to avoid IDE and Lint errors
- Rewrite the partial header to avoid space problems
- Added new sub-generator `service`
- Added new sub-generator `controller`

## [0.5.2]
### Changed
- Changed `jasmine.DEFAULT_TIMEOUT_INTERVAL` to higher value to fix the error with travis failing build on Node.js 4

## [0.5.1]
### Changed
- Split some test to fix the error with travis failing build on Node.js 4
- Changed `jasmine.DEFAULT_TIMEOUT_INTERVAL` to higher value to fix the error with travis failing build on Node.js 4

## [0.5.0]
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
