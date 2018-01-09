/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file viewName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 13:16
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
	const logs            = require('../../common/logs.js');
	const utils           = require('../../common/utils.js');
	const colors          = require('../../common/colors.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'viewName',
			message: 'Name of the view:'
		}
	];

	const hints = [
		'All angular files will have this as prefix like <viewNameController>, <viewNameService>, ...',
		utils.namingConvention('0')
	];

	module.exports = class ViewName {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.viewName : $that.fileNamesCamel;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.viewName            = $response.viewName;
			$that.viewNameCamel       = camelCase($response.viewName);
			$that.viewNameKebab       = _.kebabCase($response.viewName);
			$that.viewNameUpperPython = upperPythonCase($response.viewName);
			$that.config.set('viewName', $that.viewName);
			$that.config.set('viewNameCamel', $that.viewNameCamel);
			$that.config.set('viewNameKebab', $that.viewNameKebab);
			$that.config.set('viewNameUpperPython', $that.viewNameUpperPython);
			$that.log(
				'The view name in camelCase is:',
				chalk.hex(colors.get('cyan'))($that.viewNameCamel)
			);
			$that.log(
				'The view name in kebab-case is:',
				chalk.hex(colors.get('cyan'))($that.viewNameKebab)
			);
			$that.log(
				'The view name in UPPER_PYTHON_CASE is:',
				chalk.hex(colors.get('cyan'))($that.viewNameUpperPython)
			);
			$that.log();
		}
	};

})();