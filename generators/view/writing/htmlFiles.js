/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file htmlFiles on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 15:13
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		const viewsPath  = utils.getViewsPath($that);
		const filePrefix = 'app/' + viewsPath + $that.viewNameCamel + '/' + $that.viewNameCamel + '.';
		const config     = {
			viewNameCamel : $that.viewNameCamel,
			viewNameKebab : $that.viewNameKebab,
			appNameKebab  : $that.config.get('appNameKebab'),
			nowDate       : $that.nowDate,
			nowTime       : $that.nowTime,
			authorShort   : $that.authorShort || $that.config.get('authorShort'),
			currentVersion: $that.currentVersion
		};

		utils.copyFileTpl($that, 'template.html', config, filePrefix + 'template.html');
	};

})();