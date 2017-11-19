# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).  
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- .codeclimate.yml file to configure Code Climate

### Changed
- writing/main.js is now split in main/markdown/linter/json files [Issue #9](https://github.com/C0ZEN/generator-altran-angular/issues/9)
- inputs/appName.js is now a class to split the method in half [Issue #10](https://github.com/C0ZEN/generator-altran-angular/issues/10)

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
