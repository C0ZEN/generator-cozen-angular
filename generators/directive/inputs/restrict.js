/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file restrict on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/02/2018
 * Time: 10:40
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const longerGenerator = 1;
	const prompts         = [
		{
			type   : 'checkbox',
			name   : 'replace',
			message: 'Define the type of directive it is:',
			choices: [
				{
					value  : logs.choice('E', 'Element name', longerGenerator),
					short  : 'E',
					checked: true
				},
				{
					value: logs.choice('A', 'Attribute', longerGenerator),
					short: 'A'
				},
				{
					value: logs.choice('C', 'Class', longerGenerator),
					short: 'C'
				},
				{
					value: logs.choice('M', 'Comment', longerGenerator),
					short: 'M'
				}
			]
		}
	];

	const hints = [
		'Define the type of directive to determine on what type of HTML element should the directive be allowed.'
	];

	module.exports = class Restrict {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.restrict : false;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.restrict = $response.restrict;
			$that.config.set('restrict', $that.restrict);
			$that.log($response);
			$that.log($that.restrict);
			$that.log();
		}
	};

})();