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

	const chalkInstance = require('chalk');
	const chalk         = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const colors        = require('../colors.js');
	const _             = require('lodash');

	const prompts = [
		{
			type   : 'input',
			name   : 'lang',
			message: 'Default cozen-angular-lib lang :',
			default: 'fr',
			store  : true
		}
	];

	const hints = [
		'The default language of your application.'
	];

	module.exports = $that => {
		$that.logHintHeader();
		$that.logHints(hints);

		$that.log('Current lang list :');
		$that.log(chalk.hex(colors.get('cyan'))('fr'));
		$that.log(chalk.hex(colors.get('cyan'))('en'));
		$that.log();

		return $that.prompt(prompts).then($response => {
			$that.lang = _.lowerCase($response.lang);
			$that.config.set('lang', $that.lang);
			$that.log();
		});
	};

})();