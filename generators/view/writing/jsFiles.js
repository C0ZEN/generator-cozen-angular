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
	const slash = require('slash');

	module.exports = $that => {
		const filePath = utils.getViewsPath($that);
		const config   = {
			viewNameCamel     : $that.viewNameCamel,
			appNameCamel      : $that.config.get('appNameCamel'),
			appNameKebab      : $that.config.get('appNameKebab'),
			controllerName    : $that.viewNameCamel + 'Controller',
			configStateName   : $that.viewNameCamel + 'State',
			serviceName       : $that.viewNameCamel + 'Service',
			constantName      : $that.viewNameCamel + 'Constant',
			nowDate           : $that.nowDate,
			nowTime           : $that.nowTime,
			authorShort       : $that.config.get('authorShort'),
			stateUrl          : $that.stateUrl,
			stateName         : $that.stateName,
			stateAbstract     : $that.stateAbstract,
			stateParent       : $that.stateParent,
			currentVersion    : $that.currentVersion,
			viewPath          : slash(utils.getViewsPath($that, false, true)),
			subscribeAndNotify: false
		};

		utils.copyFileTplFrom($that, 'controller.txt', config, filePath + '.controller.js');
		utils.copyFileTplFrom($that, 'service.txt', config, filePath + '.service.js');
		utils.copyFileTplFrom($that, 'constant.txt', config, filePath + '.constant.js');
		utils.copyFileTplFrom($that, 'state.txt', config, filePath + '.state.js');
	};

})();