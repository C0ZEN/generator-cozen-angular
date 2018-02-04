/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file name on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/02/2018
 * Time: 10:45
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const _     = require('lodash');
	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'name',
			message: 'Name of the directive as Angular name:'
		}
	];

	const hints = [
		'This is the name of the directive used by Angular.',
		'Make sure that there is no directive with already the same name.',
		'Do the same for the controller name',
		utils.namingConvention('0')
	];

	module.exports = class Name {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.name : $that.fileName;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.name = $response.name;
			$that.config.set('name', $that.name);
			$that.nameKebab = _.kebabCase($that.name);
			$that.config.set('nameKebab', $that.nameKebab);
			$that.log();
		}
	};

})();