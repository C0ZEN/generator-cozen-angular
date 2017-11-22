/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file styles on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 10:55
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../utils.js');

	module.exports = $that => {
		utils.copyFileTplWithMultipleDestinations(
			$that,
			'app/styles/less/app.less',
			{
				theme       : $that.theme,
				appNameKebab: $that.appNameKebab
			},
			[
				'app/styles/less/' + $that.appNameKebab + '.less'
			]
		);
		utils.copyFileTplWithMultipleDestinations(
			$that,
			'app/styles/less/app.loader.less',
			{
				theme: $that.theme
			},
			[
				'app/styles/less/' + $that.appNameKebab + '.loader.less'
			]
		);
		utils.copyFileTplWithMultipleDestinations($that, 'app/styles/less/app.variables.less', null, [
			'app/styles/less/' + $that.appNameKebab + '.variables.less'
		]);
	};

})();