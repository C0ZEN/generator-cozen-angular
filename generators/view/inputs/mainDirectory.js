/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file mainDirectory on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 22/12/2017
 * Time: 11:35
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'mainDirectory',
			message: 'Name of the main directory :',
			default: 'mainDirectory'
		}
	];

	const hints = [
		'This is the name of the main directory created by the generator.'
	];

	module.exports = class AppName {
		static set($that) {
			logs.hintHeader($that);
			logs.hintsMultiline($that, hints);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.mainDirectory = $response.mainDirectory;
			$that.config.set('mainDirectory', $that.mainDirectory);
			$that.log();
		}
	};

})();