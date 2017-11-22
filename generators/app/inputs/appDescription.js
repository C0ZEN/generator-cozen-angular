/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file appDescription on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/11/2017
 * Time: 23:19
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const prompts = [
		{
			type   : 'input',
			name   : 'appDescription',
			message: 'Description of your app :',
			default: 'This is the description for the project'
		}
	];

	const hints = [
		'Just describe the purpose of your project.'
	];

	module.exports = $that => {
		$that.logHintHeader();
		$that.logHints(hints);

		prompts[0].default += ' ' + $that.appName;

		return $that.prompt(prompts).then($response => {
			$that.appDescription = $response.appDescription;
			$that.log();
		});
	};

})();