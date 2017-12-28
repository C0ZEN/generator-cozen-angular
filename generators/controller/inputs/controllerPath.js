/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file controllerPath on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/12/2017
 * Time: 17:13
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'controllerPath',
			message: 'Path of the controller :',
			default: 'scripts/controllers'
		}
	];

	const hints = [
		'This will allow you to override the default path for the controller'
	];

	module.exports = class ControllerPath {
		static set($that) {
			logs.hintHeader($that);
			logs.hintsMultiline($that, hints);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.controllerPath = $response.controllerPath;
			$that.config.set('controllerPath', $that.controllerPath);
			$that.log();
		}
	};

})();