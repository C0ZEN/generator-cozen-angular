/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file stylesFiles on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 15:21
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		const filePath = utils.getViewsPath($that, true);
		const config   = {
			viewNameCamel : $that.viewNameCamel,
			viewNameKebab : $that.viewNameKebab,
			appNameKebab  : $that.config.get('appNameKebab'),
			nowDate       : $that.nowDate,
			nowTime       : $that.nowTime,
			authorShort   : $that.config.get('authorShort'),
			currentVersion: $that.currentVersion
		};

		utils.copyFileTpl($that, 'styles/main.less', config, filePath + '/styles/' + $that.fileNames + '.less');
		utils.copyFileTpl($that, 'styles/mixins.less', config, filePath + '/styles/' + $that.fileNames + '.mixins.less');
		utils.copyFileTpl($that, 'styles/variables.less', config, filePath + '/styles/' + $that.fileNames + '.variables.less');
	};

})();