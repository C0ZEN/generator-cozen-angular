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
		utils.copyFileTpl($that, 'app/config/tpls/index.tpl.pug', {
			appNameCamel  : $that.appNameCamel,
			lang          : $that.lang,
			appNameKebab  : $that.appNameKebab,
			themeColor    : $that.themeColor,
			appDescription: $that.appDescription,
			authorShort   : $that.authorShort,
			langExtended  : $that.langExtended,
			appName       : $that.appName,
			twitterName   : $that.twitterName,
			twitterAdded  : $that.twitterAdded
		});
		utils.copyFileTpl($that, 'app/config/tpls/target.config.tpl.txt', {
			appNameCamel: $that.appNameCamel
		}, 'app/config/tpls/target.config.tpl.js');
		utils.copyFileTpl($that, 'app/config/tpls/manifest.tpl.json', {
			lang           : $that.lang,
			appDescription : $that.appDescription,
			appName        : $that.appName,
			backgroundColor: $that.backgroundColor,
			themeColor     : $that.themeColor,
			authorShort    : $that.authorShort
		});
		utils.copyFileTpl($that, 'app/config/tpls/structured-data.tpl.txt', {
			appName       : $that.appName,
			appDescription: $that.appDescription,
			authorShort   : $that.authorShort
		}, 'app/config/tpls/structured-data.tpl.json');
		utils.copyFileTpl($that, 'app/config/tpls/vendors.tpl.pug');
	};

})();