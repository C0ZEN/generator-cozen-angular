/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file app on WebStorm
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
		utils.copyFileTpl($that, 'app/app.txt', {
			appNameKebab  : $that.appNameKebab,
			appNameCamel  : $that.appNameCamel,
			authorShort   : $that.authorShort,
			nowDate       : $that.nowDate,
			nowTime       : $that.nowTime,
			currentVersion: $that.currentVersion,
			aal           : $that.aalBowerDependency
		}, 'app/app.js');
		utils.copyFileTpl($that, 'app/scripts/constants/vendors.constant.txt', {
			appNameKebab  : $that.appNameKebab,
			appNameCamel  : $that.appNameCamel,
			authorShort   : $that.authorShort,
			nowDate       : $that.nowDate,
			nowTime       : $that.nowTime,
			currentVersion: $that.currentVersion
		}, 'app/scripts/constants/vendors.constant.js');
	};

})();