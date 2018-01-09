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

	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'controllerName',
			message: 'Name of the controller:'
		}
	];

	const hints = [
		'The name of the controller.',
		'We will add a prefix: "Controller"',
		utils.namingConvention('0')
	];

	module.exports = class ControllerName {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.controllerName : 'controllerName';

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