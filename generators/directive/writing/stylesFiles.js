/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file stylesFiles on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 06/02/2018
 * Time: 22:37
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');
	const path  = require('path');

	module.exports = $that => {
		const config = {
			appNameCamel      : $that.config.get('appNameCamel'),
			appNameKebab      : $that.config.get('appNameKebab'),
			nowDate           : $that.nowDate,
			nowTime           : $that.nowTime,
			authorShort       : $that.config.get('authorShort'),
			currentVersion    : $that.currentVersion,
			nameUpperPython   : $that.nameUpperPython,
			fileName          : $that.fileName,
			directiveNameKebab: $that.nameKebab
		};

		utils.copyFileTpl($that, 'styles/main.txt', config, path.join($that.path, '/styles/' + $that.fileName + '.less'));
		utils.copyFileTpl($that, 'styles/mixins.txt', config, path.join($that.path, '/styles/' + $that.fileName + '.mixins.less'));
		utils.copyFileTpl($that, 'styles/variables.txt', config, path.join($that.path, '/styles/' + $that.fileName + '.variables.less'));
	};

})();