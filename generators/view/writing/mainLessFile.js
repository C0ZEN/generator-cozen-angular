/**
 * Generated header by Cozen for generator-cozen-angular project
 * Generated file mainLess on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 22/12/2017
 * Time: 16:44
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const path = require('path');

	module.exports = $that => {

		const styleFilePath = path.join(process.cwd(), 'app/styles/less', $that.config.get('appNameKebab') || 'main.less');

		/* istanbul ignore if */
		if ($that.fs.exists(styleFilePath)) {
			write();
		}
		else {
			$that.fs.write(styleFilePath, '');
			write();
		}

		function write() {
			let styleFile = $that.fs.read(styleFilePath);
			styleFile += '\n';
			styleFile += '@import (less) "../../views/' + $that.viewPath;
			styleFile += $that.mainDirectory + '/styles/' + $that.viewNameCamel + '.less';
			$that.fs.write(styleFilePath, styleFile);
		}
	};

})();