/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file linter on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 11:20
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		utils.copyFileTpl($that, '.eslintignore', {
			appNameKebab: $that.appNameKebab
		});
		utils.copyFile($that, '.eslintrc.json');
		utils.copyFile($that, '.jscsrc');
		utils.copyFile($that, '.jshintrc');
	};

})();