/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file isThisYou on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 13:58
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../logs.js');

	const prompts = [
		{
			type   : 'confirm',
			name   : 'isThisYou',
			message: 'Are you ',
			default: true
		}
	];

	module.exports = class IsThisYou {
		static set($that) {

			/* istanbul ignore next */
			if ($that.config.get('authorEmail')) {
				prompts[0].message += $that.config.get('authorFirstName') || '';
				prompts[0].message += ' ';
				prompts[0].message += $that.config.get('authorLastName') || '';
				prompts[0].message += ' <';
				prompts[0].message += $that.config.get('authorEmail') || '';
				prompts[0].message += '> ?';

				return $that.prompt(prompts).then($response => {
					this.onSuccess($that, $response);
				});
			}
			this.onError($that);
			return null;
		}

		/* istanbul ignore next */
		static onSuccess($that, $response) {
			$that.isThisYou = $response.isThisYou;
			$that.log();
		}

		static onError($that) {
			$that.isThisYou = false;
			$that.log();
		}
	};

})();