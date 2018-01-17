/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file stateFile on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 17/01/2018
 * Time: 11:43
 * Version: 0.12.18
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');
	const path  = require('path');

	module.exports = $that => {
		const filePath = path.join($that.filePath, $that.fileName + '.state.js');
		const config   = {
			appNameCamel   : $that.config.get('appNameCamel'),
			appNameKebab   : $that.config.get('appNameKebab'),
			providerName   : $that.providerName,
			nowDate        : $that.nowDate,
			nowTime        : $that.nowTime,
			authorShort    : $that.config.get('authorShort'),
			currentVersion : $that.currentVersion,
			stateAbstract  : $that.stateAbstract,
			stateParent    : $that.stateParent,
			stateUrl       : $that.stateUrl,
			stateName      : $that.stateName,
			configStateName: 'config',
			viewPath       : null,
			controllerName : null
		};

		utils.copyFileTplFrom($that, 'state.txt', config, filePath);
	};

})();