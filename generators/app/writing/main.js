/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file main on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 10:46
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		utils.copyFile($that, '.bowerrc');
		utils.copyFile($that, '.editorconfig');
		utils.copyFile($that, '.gitattributes');
		utils.copyFileTpl($that, '_.gitignore', {
			appNameKebab: $that.appNameKebab
		}, '.gitignore');
		utils.copyFileTpl($that, 'Gruntfile.txt', {
			appNameCamel: $that.appNameCamel,
			appNameKebab: $that.appNameKebab
		}, 'Gruntfile.js');
	};

})();