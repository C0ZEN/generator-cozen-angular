/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file lang on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/11/2017
 * Time: 23:30
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const _               = require('lodash');
	const logs            = require('../../common/logs.js');
	const longerGenerator = 2;

	const prompts = [
		{
			type   : 'list',
			name   : 'lang',
			message: 'Select a language:',
			choices: [
				{
					name   : logs.choice('fr', 'français', longerGenerator),
					value  : 'fr',
					short  : 'fr',
					checked: true
				},
				{
					name : logs.choice('en', 'english', longerGenerator),
					value: 'en',
					short: 'en'
				}
			]
		}
	];

	const hints = [
		'The default language of your application.'
	];

	module.exports = class Lang {
		static set($that) {

			logs.hints($that, hints);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.lang = _.lowerCase($response.lang);
			$that.config.set('lang', $that.lang);
			$that.log();
		}
	};

})();