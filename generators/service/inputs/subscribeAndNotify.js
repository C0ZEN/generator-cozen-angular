/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file subscribeAndNotify on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 14/01/2018
 * Time: 10:34
 * Version: 0.12.13
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'confirm',
			name   : 'subscribeAndNotify',
			message: 'Add methods to subscribe and notify:'
		}
	];

	const hints = [
		'Do you want the subscribe and notify methods added to the service ?',
		'These methods allow you to easily execute a callback function in your controller to get some data when the service change them.',
		'Shorter: update your vm when some constants change from your service. Auto-update feed.'
	];

	module.exports = class SubscribeAndNotify {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.subscribeAndNotify : false;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.subscribeAndNotify = $response.subscribeAndNotify;
			$that.config.set('subscribeAndNotify', $that.subscribeAndNotify);
			$that.log();
		}
	};

})();