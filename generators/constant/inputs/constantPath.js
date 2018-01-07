/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file constantPath on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 25/12/2017
 * Time: 21:08
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'constantPath',
			message: 'Path of the constant:'
		}
	];

	const hints = [
		'This will allow you to override the default path for the constant.'
	];

	module.exports = class ConstantPath {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.constantPath : 'app/scripts/constants';

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.constantPath = $response.constantPath;
			$that.config.set('constantPath', $that.constantPath);
			$that.log();
		}
	};

})();