/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file servicePath on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/12/2017
 * Time: 12:26
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'servicePath',
			message: 'Path of the service :',
			default: 'scripts/services'
		}
	];

	const hints = [
		'This will allow you to override the default path for the service'
	];

	module.exports = class ServicePath {
		static set($that) {
			logs.hintsMultiline($that, hints);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.servicePath = $response.servicePath;
			$that.config.set('servicePath', $that.servicePath);
			$that.log();
		}
	};

})();