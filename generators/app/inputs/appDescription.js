/**
 * Generated header by C0ZEN for generator-altran-angular project
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
			message: 'Description of your app :'
		}
	];

	module.exports = $that => {
		$that.logHintHeader();
		$that.logHint('Just describe the purpose of your project.');

		return $that.prompt(prompts).then($response => {
			$that.appDescription = $response.appDescription;
			$that.log();
		});
	};

})();