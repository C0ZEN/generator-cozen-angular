// jshint ignore: start
'use strict';

module.exports = function (grunt) {
	const path = require('path');

	const config = {
		version: require('./package.json').version
	};

	const staticMappings = {};

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt, staticMappings);

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'grunt/config'),
		jitGrunt  : {
			customTasksDir: 'grunt/tasks',
			staticMappings
		},
		data      : {
			config,
			newVersion      : 'toDefine',
			newVersionTarget: 'toDefine',
			version         : 'toDefine'
		}
	});

	grunt.loadNpmTasks('grunt-git');
};