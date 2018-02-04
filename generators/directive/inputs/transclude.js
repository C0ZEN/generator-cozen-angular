/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file transclude on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/02/2018
 * Time: 10:41
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'confirm',
			name   : 'transclude',
			message: 'Does the directive transclude his content:'
		}
	];

	const hints = [
		'Use this option at true to allow the directive to transclude his content over it.',
		'Checkout the official documentation if you do not understand this option'
	];

	module.exports = class Transclude {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.transclude : false;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.transclude = $response.transclude;
			$that.config.set('transclude', $that.transclude);
			$that.log();
		}
	};

})();