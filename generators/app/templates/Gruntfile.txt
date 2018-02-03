/* jshint -W097 */
/* eslint key-spacing:"off" */
'use strict';

module.exports = function (grunt) {

	const path = require('path');

	const appPaths = {
		app    : require('./bower.json').appPath,
		release: require('./bower.json').releasePath
	};

	const globalConfig = {
		browserslist: require('./package.json').browserslist,
		prettier    : require('./package.json').prettier,
		version     : require('./package.json').version
	};

	const targets = {
		dev    : require('./app/config/targets/config.dev.json'),
		test   : require('./app/config/targets/config.test.json'),
		preprod: require('./app/config/targets/config.preprod.json'),
		prod   : require('./app/config/targets/config.prod.json')
	};

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt, {
		useminPrepare: 'grunt-usemin',
		ngtemplates  : 'grunt-angular-templates',
		cdnify       : 'grunt-google-cdn'
	});

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'grunt/config'),
		jitGrunt  : {
			customTasksDir: 'grunt/tasks',
			staticMappings: {
				useminPrepare: 'grunt-usemin',
				ngtemplates  : 'grunt-angular-templates',
				cdnify       : 'grunt-google-cdn'
			}
		},
		data      : {
			paths           : appPaths,
			config          : globalConfig,
			currentTarget   : 'toDefine',
			newVersion      : 'toDefine',
			newVersionTarget: 'toDefine',
			version         : 'toDefine',
			targets
		}
	});

	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-git');

	grunt.task.run('notify_hooks');

	grunt.config.set('oldVersion', null);
	grunt.config.set('newPatchVersion', null);
	grunt.config.set('newMinorVersion', null);
	grunt.config.set('newMajorVersion', null);
	grunt.config.set('chosenRelease', null);
};