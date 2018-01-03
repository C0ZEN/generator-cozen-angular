/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file viewPath on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 17/12/2017
 * Time: 12:16
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'viewPath',
			message: 'Path of the view :',
			default: ''
		}
	];

	const hints = {
		whatIsIt: [
			'The path of the view is the path after the views folder and before the main directory.'
		],
		example : [
			'Example:',
			'If you want to create the view "app/views/authentication", let this field empty.',
			'If you want to create the view "app/views/authentication/login", this fields should be "login".'
		]
	};

	module.exports = class ViewPath {
		static set($that) {

			hints.preview = [
				'You set that the main directory is "' + $that.mainDirectory + '".',
				'The current destination will be "app/views/' + $that.mainDirectory + '".'
			];

			logs.hintsMultiline($that, hints.whatIsIt);
			logs.hintsMultiline($that, hints.example);
			logs.hintsMultiline($that, hints.preview);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.viewPath = $response.viewPath;
			$that.config.set('viewPath', $that.viewPath);
			$that.log();
		}
	};

})();