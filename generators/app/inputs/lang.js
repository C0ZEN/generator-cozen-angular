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

	const _    = require('lodash');
	const logs = require('../../common/logs.js');

	const longerGenerator = 2;
	const prompts         = [
		{
			type   : 'list',
			name   : 'lang',
			message: 'Select a language:',
			choices: [
				{
					name : logs.choice('fr', 'français', longerGenerator),
					value: 'fr',
					short: 'fr'
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
		static set($that, $defaultFromMemory) {
			logs.hints($that, hints);

			if ($defaultFromMemory) {
				prompts[0].choices[0].checked = true;
			}
			else {
				_.forEach(prompts[0].choices, $choice => {
					$choice.checked = $choice.value === $that.lang;
				});
			}

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