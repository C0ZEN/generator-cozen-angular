/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file main on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 10:46
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../utils.js');

	module.exports = $that => {
		utils.copyFile($that, '.bowerrc');
		utils.copyFile($that, '.editorconfig');
		utils.copyFileTpl($that, '.eslintignore', {
			appNameKebab: $that.appNameKebab
		});
		utils.copyFile($that, '.eslintrc');
		utils.copyFile($that, '.gitattributes');
		utils.copyFileTpl($that, '.gitignore', {
			appNameKebab: $that.appNameKebab
		});
		utils.copyFile($that, '.jscsrc');
		utils.copyFile($that, '.jshintrc');
		utils.copyFileTpl($that, 'bower.json', {
			appNameKebab: $that.appNameKebab,
			theme       : $that.theme
		});
		utils.copyFile($that, 'CHANGELOG.md');
		utils.copyFile($that, 'CONTRIBUTING.md');
		utils.copyFileTpl($that, 'Gruntfile.js', {
			appNameCamel: $that.appNameCamel,
			appNameKebab: $that.appNameKebab
		});
		utils.copyFileTpl($that, 'manifest.json', {
			lang           : $that.lang,
			appDescription : $that.appDescription,
			appName        : $that.appName,
			backgroundColor: $that.backgroundColor,
			themeColor     : $that.themeColor
		});
		utils.copyFileTpl($that, 'LICENSE.md', {
			appName: $that.appName
		});
		utils.copyFileTpl($that, 'package.json', {
			appNameKebab  : $that.appNameKebab,
			appDescription: $that.appDescription,
			authorLong    : $that.authorLong
		});
		utils.copyFileTpl($that, 'README.md', {
			appName       : $that.appName,
			appDescription: $that.appDescription,
			authorShort   : $that.authorShort,
			authorEmail   : $that.authorEmail
		});
	};

})();