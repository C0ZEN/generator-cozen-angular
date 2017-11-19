/**
 * Generated header by C0ZEN for generator-altran-angular project
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

	module.exports = $that => {
		$that.logHint();
		$that.logHint('Simply set up your email.');

		const prompts = [
			{
				type   : 'input',
				name   : 'authorEmail',
				message: 'Your email (altran) :',
				default: _.lowerCase($that.authorFirstName) + '.' + _.lowerCase($that.authorLastName) + '@altran.com'
			}
		];

		return $that.prompt(prompts).then($response => {
			$that.authorEmail = $response.authorEmail;
			$that.authorShort = $that.authorFirstName + ' ' + $that.authorLastName;
			$that.authorLong  = $that.authorFirstName + ' ' + $that.authorLastName + ' ' + $that.authorEmail;
			$that.log();
		});
	};

})();