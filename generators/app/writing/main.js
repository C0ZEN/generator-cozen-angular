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

	const utils = require('../utils.js');

	module.exports = $that => {
		utils.copyFile($that, '.bowerrc');
		utils.copyFile($that, '.editorconfig');
		utils.copyFile($that, '.gitattributes');
		utils.copyFileTpl($that, '.gitignore', {
			appNameKebab: $that.appNameKebab
		});
		utils.copyFileTpl($that, 'Gruntfile.js', {
			appNameCamel: $that.appNameCamel,
			appNameKebab: $that.appNameKebab
		});
	};

})();