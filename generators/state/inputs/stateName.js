/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file stateName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 17/01/2018
 * Time: 10:14
 * Version: 0.12.18
 */
(function () {
	'use strict';

	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'stateName',
			message: 'Name of the state:'
		}
	];

	const hints = [
		'This is the name of your state.',
		'If this view has a parent, don\'t forget to mention it as "parent.stateName".',
		utils.namingConvention('5')
	];

	module.exports = class StateName {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.stateName : 'state.name';

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