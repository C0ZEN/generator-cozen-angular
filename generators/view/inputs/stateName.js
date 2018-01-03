/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file stateName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 20:39
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'stateName',
			message: 'Name of the state :'
		}
	];

	const hints = [
		'This is the name of your state.',
		'If this view has a parent, don\'t forget to mention it as "parent.stateName".',
		utils.namingConvention('5')
	];

	module.exports = class StateName {
		static set($that) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $that.viewNameCamel;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.stateName = $response.stateName;
			$that.config.set('stateName', $that.stateName);
			$that.log();
		}
	};

})();