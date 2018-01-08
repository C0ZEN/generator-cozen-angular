/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file stateParent on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 03/01/2017
 * Time: 20:58
 * Version: 0.11.0
 */
(function () {
	'use strict';

	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'stateParent',
			message: 'Does the state have a parent ? His name:'
		}
	];

	const hints = {
		description: [
			'Does the state have an invisible parent ?',
			'Leave the field empty if not.'
		],
		example    : [
			'Example:',
			'If the state name is "app.authentication.admin.login"',
			'You could replace the name to "authentication.admin.login".',
			'In such case, the parent should be "app".'
		]
	};

	module.exports = class StateParent {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints.description);
			logs.hintsMultiline($that, hints.example);
			logs.hint($that, utils.namingConvention('5'));

			prompts[0].default = $defaultFromMemory ? $that.stateParent : null;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.stateParent = $response.stateParent;
			$that.config.set('stateParent', $that.stateParent);
			$that.log();
		}
	};

})();