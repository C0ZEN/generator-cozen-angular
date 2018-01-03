/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file providerName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 28/12/2017
 * Time: 14:15
 * Version: 0.8.0
 */
(function () {
	'use strict';

	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'providerName',
			message: 'Name of the provider:',
			default: 'providerName'
		}
	];

	const hints = [
		'The name of the provider.',
		utils.namingConvention('0')
	];

	module.exports = class ProviderName {
		static set($that) {
			logs.hintsMultiline($that, hints);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.providerName = $response.providerName;
			$that.config.set('providerName', $that.providerName);
			$that.log();
		}
	};

})();