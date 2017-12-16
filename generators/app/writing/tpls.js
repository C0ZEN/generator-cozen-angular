/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file tpls on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 10:56
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		utils.copyFileTpl($that, 'app/config/tpls/index.tpl.html', {
			appNameCamel: $that.appNameCamel,
			lang        : $that.lang,
			appNameKebab: $that.appNameKebab,
			themeColor  : $that.themeColor
		});
		utils.copyFileTpl($that, 'app/config/tpls/target.config.tpl.js', {
			appNameCamel: $that.appNameCamel
		});
	};

})();