/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file appName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/11/2017
 * Time: 16:21
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const chalkInstance   = require('chalk');
	const chalk           = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const kebabCase       = require('lodash.kebabcase');
	const camelCase       = require('camelcase');
	const upperPythonCase = require('case').constant;
	const colors          = require('../colors');

	const prompts = [
		{
			type   : 'input',
			name   : 'appName',
			message: 'Name of your app :',
			default: 'My App'
		}
	];

	module.exports = class AppName {
		static set($that) {
			$that.logHintHeader();
			$that.logHint('The name of the app will be used as angular module name and at any other location where the project need a name like package.json or bower.json');
			$that.logHint('Write it down in his normal syntax like <Altran Angular Generator>');
			$that.logHint('Wrong examples: <altran Angular Generator>, <altranAngularGenerator>, <altran-angular-generator>');

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.appName            = $response.appName;
			$that.appNameCamel       = camelCase($response.appName);
			$that.appNameKebab       = kebabCase($response.appName);
			$that.appNameUpperPython = upperPythonCase($response.appName);
			$that.log(
				'The app name in camelCase is :',
				chalk.hex(colors.get('cyan'))($that.appNameCamel)
			);
			$that.log(
				'The app name in kebab-case is :',
				chalk.hex(colors.get('cyan'))($that.appNameKebab)
			);
			$that.log(
				'The app name in UPPER_PYTHON_CASE is :',
				chalk.hex(colors.get('cyan'))($that.appNameUpperPython)
			);
			$that.log();
		}
	};

})();