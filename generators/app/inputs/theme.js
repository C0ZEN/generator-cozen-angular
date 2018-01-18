/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file theme on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/11/2017
 * Time: 23:29
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const _    = require('lodash');
	const logs = require('../../common/logs.js');

	const longerGenerator = 21;
	const prompts         = [
		{
			type   : 'list',
			name   : 'theme',
			message: 'Select a theme:',
			choices: [
				{
					name : logs.choice('origin', 'Default theme #legacy', longerGenerator),
					value: 'origin',
					short: 'origin'
				},
				{
					name : logs.choice('altran-portail-france', 'Altran portail project', longerGenerator),
					value: 'altran-portail-france',
					short: 'altran-portail-france'
				},
				{
					name : logs.choice('et-banking', 'Eurotunnel project', longerGenerator),
					value: 'et-banking',
					short: 'et-banking'
				}
			]
		}
	];

	const hints = [
		'The theme is a pure dependency of the Altran Angular Lib.'
	];

	module.exports = class Theme {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			if ($defaultFromMemory) {
				prompts[0].choices[0].checked = true;
			}
			else {
				_.forEach(prompts[0].choices, $choice => {
					$choice.checked = $choice.value === $that.theme;
				});
			}

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.theme = $response.theme;
			$that.config.set('theme', $that.theme);
			$that.log();
		}
	};

})();