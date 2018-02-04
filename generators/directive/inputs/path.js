/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file path on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/02/2018
 * Time: 10:45
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');
	const path = require('path');

	const prompts = [
		{
			type   : 'input',
			name   : 'path',
			message: 'Path to the directive directory:'
		}
	];

	const hints = [
		'This will allow you to override the default path for the directive directory.',
		'All files will be added into this path and directory.'
	];

	module.exports = class Path {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.path : 'app/scripts/directives/myDirectiveRootFolder';

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.path = $response.path;
			$that.config.set('path', $that.path);
			$that.rootDirectory = path.basename($that.path);
			$that.config.set('rootDirectory', $that.rootDirectory);
			$that.log();
		}
	};

})();