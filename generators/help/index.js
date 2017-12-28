/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file index on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 28/12/2017
 * Time: 21:41
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const Generator = require('yeoman-generator');

	const subGenerators = require('./inputs/subGenerators.js');

	module.exports = class extends Generator {
		inputSubGenerators() {
			return subGenerators.set(this);
		}
	};

})();