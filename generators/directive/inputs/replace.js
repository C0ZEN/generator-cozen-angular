/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file replace on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/02/2018
 * Time: 10:40
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'confirm',
			name   : 'replace',
			message: 'Does the directive replace the template where it is called:'
		}
	];

	const hints = [
		'Use this option at true to remove from the DOM the content where the directive is called',
		'If you do not understand this option, please checkout the official documentation about "replace" property for the directive.'
	];

	module.exports = class Replace {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.replace : false;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.replace = $response.replace;
			$that.config.set('replace', $that.replace);
			$that.log();
		}
	};

})();