/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file filterFile on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/12/2017
 * Time: 19:56
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		const defaultPath = 'scripts/filters';
		const filePrefix  = 'app/' + ($that.filterPath || defaultPath) + '/' + $that.filterName + '.';
		const config      = {
			appNameCamel  : $that.config.get('appNameCamel'),
			appNameKebab  : $that.config.get('appNameKebab'),
			filterName    : $that.filterName + 'Filter',
			nowDate       : $that.nowDate,
			nowTime       : $that.nowTime,
			authorShort   : $that.config.get('authorShort'),
			currentVersion: $that.currentVersion
		};

		utils.copyFileTplFrom($that, 'filter.txt', config, filePrefix + 'filter.js');
	};

})();