/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file serviceName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/12/2017
 * Time: 11:54
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'serviceName',
			message: 'Name of the service :',
			default: 'serviceName'
		}
	];

	const hints = [
		'The name of the service should be write on camelCase.'
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
			$that.serviceName = $response.serviceName;
			$that.config.set('serviceName', $that.serviceName);
			$that.log();
		}
	};

})();