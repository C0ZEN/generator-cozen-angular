/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file twitterName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 31/01/2018
 * Time: 11:57
 * Version: 0.14.1
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'twitterName',
			message: 'Your twitter account name:'
		}
	];

	const hints = [
		'Enter your twitter account name - without the @ prefix -.',
		'Used to create meta data for SEO.',
		'Let this field empty to ignore.'
	];

	module.exports = class AppDescription {
		static set($that, $defaultFromMemory) {
			logs.hints($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.twitterName : '';

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.twitterName = $response.twitterName;
			$that.config.set('twitterName', $that.twitterName);
			$that.twitterAdded = !!$response.twitterName;
			$that.config.set('twitterAdded', $that.twitterAdded);
			$that.log();
		}
	};

})();