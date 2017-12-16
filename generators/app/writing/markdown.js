/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file markdown on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 11:18
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');

	module.exports = $that => {
		utils.copyFile($that, 'CHANGELOG.md');
		utils.copyFile($that, 'CONTRIBUTING.md');
		utils.copyFileTpl($that, 'LICENSE.md', {
			appName: $that.appName
		});
		utils.copyFileTpl($that, 'README.md', {
			appName       : $that.appName,
			appDescription: $that.appDescription,
			authorShort   : $that.authorShort,
			authorEmail   : $that.authorEmail
		});
	};

})();