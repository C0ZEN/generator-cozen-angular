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

	module.exports = $that => {
		$that.logHint();
		$that.logHint('Just describe the purpose of your project.');

		const prompts = [
			{
				type   : 'input',
				name   : 'appDescription',
				message: 'Description of your app :'
			}
		];

		return $that.prompt(prompts).then($response => {
			$that.appDescription = $response.appDescription;
			$that.log();
		});
	};

})();