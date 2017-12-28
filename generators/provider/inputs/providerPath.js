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
			message: 'Path of the provider :',
			default: ''
		}
	];

	const hints = [
		'This will allow you to override the default path for the provider',
		'By default, it is: scripts/providers'
	];

	module.exports = class ProviderPath {
		static set($that) {
			logs.hintHeader($that);
			logs.hintsMultiline($that, hints);

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