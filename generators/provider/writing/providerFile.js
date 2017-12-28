/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file providerFile on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 28/12/2017
 * Time: 14:15
 * Version: 0.8.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');
	const path  = require('path');

	module.exports = $that => {
		const filePath = path.join('app', $that.providerPath, $that.fileName + '.provider.js');
		const config   = {
			appNameCamel  : $that.config.get('appNameCamel'),
			appNameKebab  : $that.config.get('appNameKebab'),
			providerName  : $that.providerName,
			nowDate       : $that.nowDate,
			nowTime       : $that.nowTime,
			authorShort   : $that.config.get('authorShort'),
			currentVersion: $that.currentVersion
		};

		utils.copyFileTplFrom($that, 'provider.txt', config, filePath);
	};

})();