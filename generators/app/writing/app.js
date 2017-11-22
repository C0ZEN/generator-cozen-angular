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

	const utils = require('../utils.js');

	module.exports = $that => {
		utils.copyFileTpl($that, 'app/app.js', {
			appNameKebab: $that.appNameKebab,
			appNameCamel: $that.appNameCamel,
			authorShort : $that.authorShort,
			nowDate     : $that.nowDate,
			nowTime     : $that.nowTime
		});
	};

})();