/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file constantFile on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 25/12/2017
 * Time: 21:30
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		const defaultPath = 'scripts/constants';
		const filePrefix  = 'app/' + ($that.constantPath || defaultPath) + '/' + $that.constantName + '.';
		const config      = {
			appNameCamel  : $that.config.get('appNameCamel'),
			appNameKebab  : $that.config.get('appNameKebab'),
			constantName  : $that.constantName + 'Filter',
			nowDate       : $that.nowDate,
			nowTime       : $that.nowTime,
			authorShort   : $that.config.get('authorShort'),
			currentVersion: $that.currentVersion
		};

		utils.copyFileTplFrom($that, 'constant.txt', config, filePrefix + 'constant.js');
	};

})();