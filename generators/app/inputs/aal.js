/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file aal on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 17/01/2018
 * Time: 20:33
 * Version: 0.13.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'confirm',
			name   : 'aalBowerDependency',
			message: 'Include Altran Angular Lib as bower dependency:'
		}
	];

	const hints = [
		'It is not an obligation to add the AAL bower dependency.',
		'So you van choose to add it or not.',
		'AAL is a library to help you create AngularJS app so much faster.'
	];

	module.exports = class Aal {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.aalBowerDependency : true;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.aalBowerDependency = $response.aalBowerDependency;
			$that.config.set('aalBowerDependency', $that.aalBowerDependency);
			$that.log();
		}
	};

})();