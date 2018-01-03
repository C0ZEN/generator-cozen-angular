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

		let styleFilePath = '';

		/* istanbul ignore next */
		if ($that.config.get('appNameKebab')) {
			styleFilePath = path.join(process.cwd(), 'app/styles/less', $that.config.get('appNameKebab') + '.less');
		}
		else {
			styleFilePath = path.join(process.cwd(), 'app/styles/less', 'main.less');
		}

		/* istanbul ignore if */
		if ($that.fs.exists(styleFilePath)) {
			write(styleFilePath);
		}
		else {
			$that.fs.write(styleFilePath, '');
			write(styleFilePath);
		}

		function write($styleFilePath) {
			let importLine = '@import (less) "../../views/';
			importLine += path.join($that.viewPath || '', $that.mainDirectory, 'styles', $that.viewNameCamel + '.less";');
			importLine     = importLine.replace(/\\/g, '/');
			$that.fs.append($styleFilePath, importLine);
		}
	};

})();