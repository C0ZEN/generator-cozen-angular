/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file authorEmail on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/11/2017
 * Time: 23:31
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const _ = require('lodash');

	const prompts = [
		{
			type   : 'input',
			name   : 'authorEmail',
			message: 'Your email (cozen) :'
		}
	];

	const hints = [
		'Simply set up your email.'
	];

	module.exports = $that => {
		$that.logHintHeader();
		$that.logHints(hints);

		prompts[0].default = _.lowerCase($that.authorFirstName) + '.' + _.lowerCase($that.authorLastName) + '@cozen.com';

		return $that.prompt(prompts).then($response => {
			$that.authorEmail = $response.authorEmail;
			$that.authorShort = $that.authorFirstName + ' ' + $that.authorLastName;
			$that.authorLong  = $that.authorFirstName + ' ' + $that.authorLastName + ' ' + $that.authorEmail;
			$that.config.set('authorEmail', $that.authorEmail);
			$that.config.set('authorShort', $that.authorShort);
			$that.config.set('authorLong', $that.authorLong);
			$that.log();
		});
	};

})();