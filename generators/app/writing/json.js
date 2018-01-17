/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file json on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 11:21
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		utils.copyFileTpl($that, 'bower.json.txt', {
			appNameKebab: $that.appNameKebab,
			theme       : $that.theme,
			aal         : $that.aalBowerDependency
		}, 'bower.json');
		utils.copyFileTpl($that, 'manifest.json', {
			lang           : $that.lang,
			appDescription : $that.appDescription,
			appName        : $that.appName,
			backgroundColor: $that.backgroundColor,
			themeColor     : $that.themeColor
		});
		utils.copyFileTpl($that, '_package.json', {
			appName           : $that.appName,
			appNameCamel      : $that.appNameCamel,
			appNameKebab      : $that.appNameKebab,
			appNameUpperPython: $that.appNameUpperPython,
			appDescription    : $that.appDescription,
			authorLong        : $that.authorLong
		}, 'package.json');
	};

})();