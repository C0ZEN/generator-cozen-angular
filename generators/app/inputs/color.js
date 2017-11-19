/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file color on WebStorm
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
			type   : 'input',
			name   : 'backgroundColor',
			message: 'Background color color :',
			store  : true
		},
		{
			type   : 'input',
			name   : 'themeColor',
			message: 'Theme color :',
			store  : true
		}
	];

	module.exports = $that => {
		$that.logHint();
		$that.logHint('The backgroundColor is the background color for the Web App Manifest.');
		$that.logHint('The value can be any valid CSS color (blue, red, ...).');
		$that.logHint('The themeColor is the background color for the search address bar.');
		$that.logHint('The value can be any hexadecimal color (#123456, #4F257B, ...).');

		return $that.prompt(prompts).then($response => {
			$that.backgroundColor = $response.backgroundColor;
			$that.themeColor      = $response.themeColor;
			$that.log();
		});
	};

})();