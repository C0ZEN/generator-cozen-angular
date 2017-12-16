/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file targets on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 10:57
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		utils.copyFileTplWithMultipleDestinations(
			$that,
			'app/config/targets/config.json',
			{
				lang        : $that.lang,
				theme       : $that.theme,
				appName     : $that.appName,
				appNameKebab: $that.appNameKebab
			},
			[
				'app/config/targets/config.dev.json',
				'app/config/targets/config.test.json',
				'app/config/targets/config.prod.json',
				'app/config/targets/config.preprod.json'
			]
		);
	};

})();