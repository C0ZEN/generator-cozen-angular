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

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'stateName',
			message: 'Name of the state :',
			default: 'state.name'
		}
	];

	const hints = [
		'The name of the state should be on write on lowercase.'
	];

	module.exports = class AppName {
		static set($that) {
			logs.hintHeader($that);
			logs.hintsMultiline($that, hints);

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