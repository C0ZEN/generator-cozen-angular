/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file author on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/11/2017
 * Time: 23:30
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const prompts = [
		{
			type    : 'input',
			name    : 'authorFirstName',
			message : 'Your first name :',
			store   : true,
			validate: $value => {
				/* istanbul ignore next */
				return $value ? true : 'Your first name could not be empty !';
			}
		},
		{
			type    : 'input',
			name    : 'authorLastName',
			message : 'Your last name :',
			store   : true,
			validate: $value => {
				/* istanbul ignore next */
				return $value ? true : 'Your last name could not be empty !';
			}
		}
	];

	const hints = [
		'Simply set up your first name and last name.',
		'Do not forget the uppercase ;)',
		'Used on the file headers.'
	];

	module.exports = class Author {
		static set($that) {
			$that.logHintHeader();
			$that.logHintsMultiline(hints);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.authorFirstName = $response.authorFirstName;
			$that.authorLastName  = $response.authorLastName;
			$that.config.set('authorFirstName', $that.authorFirstName);
			$that.config.set('authorLastName', $that.authorLastName);
			$that.log();
		}
	};

})();