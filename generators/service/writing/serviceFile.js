/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file serviceFile on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/12/2017
 * Time: 12:22
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		const defaultPath = 'scripts/services';
		const filePrefix  = 'app/' + ($that.servicePath || defaultPath) + '/' + $that.serviceName + '.';
		const config      = {
			appNameCamel  : $that.config.get('appNameCamel'),
			appNameKebab  : $that.config.get('appNameKebab'),
			serviceName   : $that.serviceName + 'Service',
			nowDate       : $that.nowDate,
			nowTime       : $that.nowTime,
			authorShort   : $that.authorShort || $that.config.get('authorShort'),
			currentVersion: $that.currentVersion
		};

		utils.copyFileTplFrom($that, 'service.txt', config, filePrefix + 'service.js');
	};

})();