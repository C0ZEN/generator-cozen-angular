/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file languagesFiles on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 06/02/2018
 * Time: 22:28
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');
	const path  = require('path');

	module.exports = $that => {
		const config = {
			appNameCamel   : $that.config.get('appNameCamel'),
			appNameKebab   : $that.config.get('appNameKebab'),
			nowDate        : $that.nowDate,
			nowTime        : $that.nowTime,
			authorShort    : $that.config.get('authorShort'),
			currentVersion : $that.currentVersion,
			nameUpperPython: $that.nameUpperPython
		};

		utils.copyFileTpl($that, 'languages/fr.json', config, path.join($that.path, 'languages/fr/fr.json'));
		utils.copyFileTpl($that, 'languages/en.json', config, path.join($that.path, 'languages/en/en.json'));
	};

})();