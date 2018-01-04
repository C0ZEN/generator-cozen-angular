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

	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'serviceName',
			message: 'Name of the service:'
		}
	];

	const hints = [
		'The name of the service.',
		utils.namingConvention('0')
	];

	module.exports = class ServiceName {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.serviceName : 'serviceName';

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