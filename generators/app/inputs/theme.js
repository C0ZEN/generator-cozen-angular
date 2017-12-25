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

	const chalkInstance = require('chalk');
	const chalk         = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const colors        = require('../../common/colors.js');
	const logs          = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'theme',
			message: 'Default cozen-angular-lib theme :',
			default: 'origin',
			store  : true
		}
	];

	const hints = [
		'The theme is a pure dependency of the Cozen Angular Lib.',
		'Enter an existing theme or enter a new one that you will create in a few.'
	];

	module.exports = class Theme {
		static set($that) {

			logs.hintHeader($that);
			logs.hintsMultiline($that, hints);

			$that.log('Current theme list :');
			$that.log(chalk.hex(colors.get('cyan'))('origin'));
			$that.log(chalk.hex(colors.get('cyan'))('altran-portail-france'));
			$that.log(chalk.hex(colors.get('cyan'))('et-banking'));
			$that.log();

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