/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file constantName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 25/12/2017
 * Time: 21:07
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'constantName',
			message: 'Name of the constant :',
			default: 'constantName'
		}
	];

	const hints = [
		'The name of the constant should be write on camelCase.'
	];

	module.exports = class ConstantName {
		static set($that) {
			logs.hintsMultiline($that, hints);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.constantName = $response.constantName;
			$that.config.set('constantName', $that.constantName);
			$that.log();
		}
	};

})();