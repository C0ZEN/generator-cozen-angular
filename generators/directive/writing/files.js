/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file files on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/02/2018
 * Time: 10:43
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');
	const path  = require('path');
	const slash = require('slash');

	module.exports = $that => {
		const filePrefixPath = path.join($that.path, $that.fileName);
		const config         = {
			appNameCamel      : $that.config.get('appNameCamel'),
			appNameKebab      : $that.config.get('appNameKebab'),
			nowDate           : $that.nowDate,
			nowTime           : $that.nowTime,
			authorShort       : $that.config.get('authorShort'),
			currentVersion    : $that.currentVersion,
			transclude        : $that.transclude,
			restrict          : $that.restrict,
			replace           : $that.replace,
			parent            : $that.parent,
			name              : $that.name,
			controllerName    : $that.nameCamel + 'Controller',
			directiveName     : $that.name,
			directiveNameCamel: $that.nameCamel,
			directiveNameKebab: $that.nameKebab,
			templateUrl       : slash(filePrefixPath.replace('app\\', '') + '.template.html')
		};

		utils.copyFileTplFrom($that, 'controller.directive.txt', config, filePrefixPath + '.controller.js');
		utils.copyFileTplFrom($that, 'directive.txt', config, filePrefixPath + '.directive.js');
		utils.copyFileTpl($that, 'template.txt', config, filePrefixPath + '.template.pug');
	};

})();