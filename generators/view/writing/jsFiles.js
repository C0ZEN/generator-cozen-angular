/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file jsFiles on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 13:41
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {

		const filePrefix = 'app/views/' + $that.viewNameCamel + '/' + $that.viewNameCamel + '.';
		const config     = {
			viewNameCamel  : $that.viewNameCamel,
			appNameCamel   : $that.config.get('appNameCamel'),
			appNameKebab   : $that.config.get('appNameKebab'),
			controllerName : $that.viewNameCamel + 'Controller',
			configStateName: $that.viewNameCamel + 'State',
			serviceName    : $that.viewNameCamel + 'Service',
			constantName   : $that.viewNameCamel + 'Constant',
			nowDate        : $that.nowDate,
			nowTime        : $that.nowTime,
			authorShort    : $that.authorShort || $that.config.get('authorShort'),
			viewUrl        : $that.viewUrl
		};

		utils.copyFileTpl($that, 'controller.js', config, filePrefix + 'controller.js');
		utils.copyFileTpl($that, 'state.js', config, filePrefix + 'state.js');
		utils.copyFileTpl($that, 'service.js', config, filePrefix + 'service.js');
		utils.copyFileTpl($that, 'constant.js', config, filePrefix + 'constant.js');
	};

})();