/**
 * Generated header by C0ZEN for generator-altran-angular project
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
	const colors        = require('../colors.js');

	module.exports = $that => {
		$that.logHint();
		$that.logHint('The theme is a pure dependency of the Altran Angular Lib.');
		$that.logHint(
			'Enter an existing theme or enter a new one that you will create in a few.'
		);

		$that.log('Current theme list :');
		$that.log(chalk.hex(colors.get('cyan'))('origin'));
		$that.log(chalk.hex(colors.get('cyan'))('altran-portail-france'));
		$that.log(chalk.hex(colors.get('cyan'))('et-banking'));

		const prompts = [
			{
				type   : 'input',
				name   : 'theme',
				message: 'Default altran-angular-lib theme :',
				default: 'origin',
				store  : true
			}
		];

		return $that.prompt(prompts).then($response => {
			$that.theme = $response.theme;
			$that.log();
		});
	};

})();