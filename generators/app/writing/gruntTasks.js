/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file gruntTasks on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/11/2017
 * Time: 21:57
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');
	const _     = require('lodash');
	const files = [
		'jsMin',
		'languages',
		'release',
		'serve'
	];

	module.exports = $that => {
		_.forEach(files, $file => {
			utils.copyFileTpl($that, 'grunt/tasks/' + $file + '.txt', {
				appNameKebab: $that.appNameKebab,
				appNameCamel: $that.appNameCamel,
				authorShort : $that.authorShort,
				nowDate     : $that.nowDate,
				nowTime     : $that.nowTime
			}, 'grunt/tasks/' + $file + '.js');
		});
	};

})();