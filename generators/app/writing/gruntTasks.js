/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file gruntTasks on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/11/2017
 * Time: 21:57
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils = require('../utils.js');
	const _     = require('lodash');
	const files = [
		'jsMin',
		'languages',
		'release',
		'serve'
	];

	module.exports = $that => {
		_.forEach(files, $file => {
			utils.copyFileTpl($that, 'grunt/tasks/' + $file + '.js', null);
		});
	};

})();