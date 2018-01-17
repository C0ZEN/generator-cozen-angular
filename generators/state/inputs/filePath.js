/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file filePath on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 17/01/2018
 * Time: 10:12
 * Version: 0.12.18
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'filePath',
			message: 'Path of the state:'
		}
	];

	const hints = [
		'This will allow you to override the default path for the state.'
	];

	module.exports = class FilePath {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.filePath : 'app/views';

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.filePath = $response.filePath;
			$that.config.set('filePath', $that.filePath);
			$that.log();
		}
	};

})();