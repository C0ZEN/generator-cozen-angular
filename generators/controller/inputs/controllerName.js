/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file controllerName on WebStorm
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
			name   : 'controllerName',
			message: 'Name of the controller :',
			default: 'controllerName'
		}
	];

	const hints = [
		'The name of the controller should be write on camelCase.'
	];

	module.exports = class ControllerName {
		static set($that) {
			logs.hintHeader($that);
			logs.hintsMultiline($that, hints);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.controllerName = $response.controllerName;
			$that.config.set('controllerName', $that.controllerName);
			$that.log();
		}
	};

})();