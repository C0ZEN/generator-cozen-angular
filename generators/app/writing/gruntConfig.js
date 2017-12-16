/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file gruntConfig on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 21:23
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../../common/utils.js');
	const _     = require('lodash');
	const files = [
		'clean',
		'concat',
		'concurrent',
		'connect',
		'copy',
		'cssmin',
		'htmlmin',
		'imagemin',
		'jsMin',
		'languages',
		'less',
		'merge-json',
		'ngtemplates',
		'notify',
		'notify_hooks',
		'postcss',
		'preprocess',
		'prettier',
		'release',
		'string-replace',
		'uglify',
		'usemin',
		'useminPrepare',
		'watch',
		'wiredep'
	];

	module.exports = $that => {
		_.forEach(files, $file => {
			utils.copyFileTpl($that, 'grunt/config/' + $file + '.js', {
				appNameCamel: $that.appNameCamel,
				appNameKebab: $that.appNameKebab,
				authorShort : $that.authorShort,
				nowDate     : $that.nowDate,
				nowTime     : $that.nowTime
			});
		});
	};

})();