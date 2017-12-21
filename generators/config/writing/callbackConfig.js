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

	const path = require('path');
	const _    = require('lodash');

	module.exports = $that => {

		const packagePath = path.join(process.cwd(), 'package.json');

		/* istanbul ignore if */
		if ($that.fs.exists(packagePath)) {
			const packageFile = $that.fs.readJSON(packagePath);
			if (packageFile) {
				packageFile.yoCallbackConfig = {
					appName           : $that.appName,
					appNameCamel      : $that.appNameCamel,
					appNameKebab      : $that.appNameKebab,
					appNameUpperPython: $that.appNameUpperPython
				};
				$that.fs.writeJSON(packagePath, packageFile);
			}
		}
	};

})();