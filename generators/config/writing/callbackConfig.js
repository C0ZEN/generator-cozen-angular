/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file callbackConfig on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 21/12/2017
 * Time: 19:35
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const config = require('../../common/config.js');

	module.exports = $that => {

		/* istanbul ignore if */
		const packageFile = config.getPackage($that);
		if (packageFile) {
			packageFile.yoCallbackConfig = {
				appName           : $that.appName,
				appNameCamel      : $that.appNameCamel,
				appNameKebab      : $that.appNameKebab,
				appNameUpperPython: $that.appNameUpperPython
			};
			config.updatePackage($that, packageFile);
		}
	};

})();