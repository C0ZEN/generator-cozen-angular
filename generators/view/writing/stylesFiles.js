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

	const path = require('path');

	module.exports = $that => {
		const viewsPath  = utils.getViewsPath($that);
		const filePrefix = 'app/' + viewsPath + $that.mainDirectory + '/styles/' + $that.viewNameCamel + '.';
		const config     = {
			viewNameCamel : $that.viewNameCamel,
			viewNameKebab : $that.viewNameKebab,
			appNameKebab  : $that.config.get('appNameKebab'),
			nowDate       : $that.nowDate,
			nowTime       : $that.nowTime,
			authorShort   : $that.authorShort || $that.config.get('authorShort'),
			currentVersion: $that.currentVersion
		};

		utils.copyFileTpl($that, 'styles/main.less', config, filePrefix + 'less');
		utils.copyFileTpl($that, 'styles/mixins.less', config, filePrefix + 'mixins.less');
		utils.copyFileTpl($that, 'styles/variables.less', config, filePrefix + 'variables.less');

		const styleFilePath = path.join(process.cwd(), 'app/styles/less', $that.config.get('appNameKebab') + '.less');

		/* istanbul ignore if */
		if ($that.fs.exists(styleFilePath)) {
			write();
		}
		else {
			$that.fs.write(styleFilePath, '');
			write();
		}

		function write() {
			let styleFile = $that.fs.read(styleFilePath);
			styleFile += '\n';
			styleFile += '@import (less) "../../views/' + $that.viewPath || '';
			styleFile += $that.mainDirectory + '/styles/' + $that.viewNameCamel + '.less';
			$that.fs.write(styleFilePath, styleFile);
		}
	};

})();