/**
 * Generated header by C0ZEN for generator-cozen-angular project
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
			default: 'white',
			store  : true
		},
		{
			type   : 'input',
			name   : 'themeColor',
			message: 'Theme color :',
			default: '#FFFFFF',
			store  : true
		}
	];

	const hints = {
		backgroundColor: [
			'The backgroundColor is the background color for the Web App Manifest.',
			'The value can be any valid CSS color (blue, red, ...).'
		],
		themeColor     : [
			'The themeColor is the background color for the search address bar.',
			'The value can be any hexadecimal color (#123456, #4F257B, ...).'
		]
	};

	module.exports = $that => {
		$that.logHintHeader();
		$that.logHintsMultiline(hints.backgroundColor);
		$that.logHintsMultiline(hints.themeColor);

		return $that.prompt(prompts).then($response => {
			$that.backgroundColor = $response.backgroundColor;
			$that.themeColor      = $response.themeColor;
			$that.config.set('backgroundColor', $that.backgroundColor);
			$that.config.set('themeColor', $that.themeColor);
			$that.log();
		});
	};

})();