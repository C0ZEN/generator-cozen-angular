/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file author on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/11/2017
 * Time: 23:30
 * Version: 1.0.0
 */
(function () {
	'use strict';

	module.exports = $that => {
		$that.logHint();
		$that.logHint('Simply set up your first name and last name.');
		$that.logHint('Do not forget the uppercase ;)');
		$that.logHint('Used on the file headers.');

		const prompts = [
			{
				type    : 'input',
				name    : 'authorFirstName',
				message : 'Your first name :',
				store   : true,
				validate: $value => {
					return $value ? true : 'Your first name could not be empty !';
				}
			},
			{
				type    : 'input',
				name    : 'authorLastName',
				message : 'Your last name :',
				store   : true,
				validate: $value => {
					return $value ? true : 'Your last name could not be empty !';
				}
			}
		];

		return $that.prompt(prompts).then($response => {
			$that.authorFirstName = $response.authorFirstName;
			$that.authorLastName  = $response.authorLastName;
		});
	};

})();