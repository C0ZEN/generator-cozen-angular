/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file stateUrl on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 15:00
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'stateUrl',
			message: 'Url of the state:'
		}
	];

	const hints = [
		'The url of the view is the one visible in the browser.',
		'You can add visible param as well like "url/:param".',
		utils.namingConvention('1')
	];

	module.exports = class StateUrl {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.stateUrl : '/' + $that.viewNameKebab;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.stateUrl = $response.stateUrl;
			$that.config.set('stateUrl', $that.stateUrl);
			$that.log();
		}
	};

})();