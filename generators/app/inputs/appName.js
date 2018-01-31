/**
 * Generated header by C0ZEN for generator-cozen-angular project
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
	const _               = require('lodash');
	const camelCase       = require('camelcase');
	const upperPythonCase = require('case').constant;
	const colors          = require('../../common/colors.js');
	const logs            = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'appName',
			message: 'Name of your app:'
		}
	];

	const hints = [
		'The name of the app will be used as angular module name and at any other location where the project need a name like package.json or bower.json',
		'Write it down in his normal syntax like <Cozen Angular Generator>',
		'Wrong examples: <cozen Angular Generator>, <cozenAngularGenerator>, <cozen-angular-generator>'
	];

	module.exports = class AppName {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.appName : 'My App';

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.appName            = $response.appName;
			$that.appNameCamel       = camelCase($response.appName);
			$that.appNameKebab       = _.kebabCase($response.appName);
			$that.appNameUpperPython = upperPythonCase($response.appName);
			$that.config.set('appName', $that.appName);
			$that.config.set('appNameCamel', $that.appNameCamel);
			$that.config.set('appNameKebab', $that.appNameKebab);
			$that.config.set('appNameUpperPython', $that.appNameUpperPython);
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