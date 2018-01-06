/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file providerPath on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 28/12/2017
 * Time: 14:15
 * Version: 0.8.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'providerPath',
			message: 'Path of the provider:'
		}
	];

	const hints = [
		'This will allow you to override the default path for the provider.'
	];

	module.exports = class ProviderPath {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.providerPath : 'app/scripts/providers';

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.providerPath = $response.providerPath;
			$that.config.set('providerPath', $that.providerPath);
			$that.log();
		}
	};

})();