/* jshint -W097 */
/* jshint -W117 */
/* jshint -W104 */
/* eslint key-spacing:"off" */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
'use strict';

module.exports = function (grunt) {

	const path     = require('path');
	const appPaths = {
		app    : require('./bower.json').appPath,
		release: require('./bower.json').releasePath
	};

	const globalConfig = {
		browserslist: require('./package.json').browserslist,
		prettier    : require('./package.json').prettier
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
			paths        : appPaths,
			config       : globalConfig,
			currentTarget: 'toDefine'
		}
	});

	grunt.initConfig({
		imagemin: {
			release: {
				options: {
					optimizationLevel: 5,
					progressive      : true,
					interlaced       : true
				},
				files  : [
					{
						expand: true,
						cwd   : '<%%= paths.app %%>/images',
						src   : '**/*.{png,jpg,jpeg,gif,svg}',
						dest  : '<%%= currentTarget %%>/images'
					}
				]
			}
		},

		htmlmin: {
			dev    : {
				options: {
					collapseBooleanAttributes: true,
					collapseWhitespace       : true,
					removeAttributeQuotes    : true,
					removeComments           : true,
					removeCommentsFromCDATA  : true
				},
				files  : [
					{
						expand: true,
						cwd   : '<%%= paths.app %%>',
						src   : 'index.html',
						dest  : '<%%= paths.app %%>'
					}
				]
			},
			release: {
				options: '<%%= htmlmin.dev.options %%>',
				files  : [
					{
						expand: true,
						cwd   : '<%%= currentTarget %%>',
						src   : 'index.html',
						dest  : '<%%= currentTarget %%>'
					}
				]
			}
		},

		ngtemplates: {
			release: {
				options: {
					module : '<%= appNameCamel %>',
					htmlmin: '<%%= htmlmin.release.options %%>'
				},
				cwd    : '<%%= paths.app %%>',
				src    : [
					'**/*.html',
					'!index.html',
					'!config/tpls/index.tpl.html'
				],
				dest   : '.tmp/release/template-cache.js'
			}
		},

		copy: {
			styles    : {
				expand: true,
				cwd   : '.tmp/release/styles',
				src   : '*.css',
				dest  : '<%%= currentTarget %%>/styles/css'
			},
			languages : {
				expand: true,
				cwd   : '<%%= paths.app %%>/languages/min',
				dest  : '<%%= currentTarget %%>/languages/',
				src   : '*.json'
			},
			other     : {
				files: [
					{
						expand: true,
						cwd   : '<%%= paths.app %%>/styles/css/',
						src   : 'reset.min.css',
						dest  : '<%%= currentTarget %%>/styles/css'
					}
				]
			},
			release   : {
				files: {
					'<%%= currentTarget %%>/styles/<%= appNameKebab %>.css'    : '<%%= paths.app %%>/styles/css/<%= appNameKebab %>.css',
					'<%%= currentTarget %%>/styles/<%= appNameKebab %>.min.css': '<%%= paths.app %%>/styles/css/<%= appNameKebab %>.min.css',
					'<%%= currentTarget %%>/styles/init-loader.css'            : '<%%= paths.app %%>/styles/css/init-loader.css',
					'<%%= currentTarget %%>/styles/init-loader.min.css'        : '<%%= paths.app %%>/styles/css/init-loader.min.css'
				}
			},
			components: {
				files: [
					{
						expand: true,
						cwd   : 'bower_components',
						src   : [
							'**/*.js',
							'**/*.css',
							'**/*.less'
						],
						dest  : '<%%= currentTarget %%>/bower_components'
					}
				]
			},
			i18n      : {
				files: {
					'<%%= currentTarget %%>/languages/i18n/fr.js': 'bower_components/angular-i18n/angular-locale_fr.js'
				}
			}
		},

		concurrent: {
			server : [
				'copy:styles'
			],
			test   : [
				'copy:styles'
			],
			release: [
				'copy:release',
				'copy:components',
				'imagemin:release'
			]
		},
	});

	// Start the notify system
	grunt.loadNpmTasks('grunt-notify');
	grunt.task.run('notify_hooks');

	// Start a local node server for dev purpose
	grunt.registerTask('serve', 'Compile then start a connect web server', () => {
		grunt.task.run([
			'clean:server',
			'wiredep',
			'preprocess:dev',
			'string-replace:devIndex',
			'htmlmin:dev',
			'jsMin:dev',
			'less:main',
			'languages:dev',
			'concurrent:server',
			'postcss:dev',
			'cssmin:dev',
			'connect:livereload',
			'notify:serve',
			'watch'
		]);
	});

	// Merge the languages
	grunt.registerMultiTask('languages', 'Languages task to compile the .json', () => {

		// Get the current target
		const target = this.target;

		// Run the languages task
		if ('dev' === target) {
			grunt.task.run([
				'clean:languages',
				'merge-json:merge',
				'merge-json:min'
			]);
		}
		else if ('release' === target) {
			grunt.task.run([
				'clean:languages',
				'merge-json:merge',
				'merge-json:min',
				'copy:languages'
			]);
		}
	});

	// Create the min files for dev
	grunt.registerMultiTask('jsMin', 'JS min task to compile the .js', function () {

		// Get the current target
		const target = this.target;

		// Run the jsMin task
		if ('dev' === target) {
			grunt.task.run([
				'concat:js',
				'uglify:dev',
				'merge-json:min'
			]);
		}
		else if ('release' === target) {
			grunt.task.run([
				'ngtemplates:release',
				'concat:release',
				'uglify:release',
				'merge-json:min'
			]);
		}
	});

	// Create the release version
	// You can specify the env (e.g: grunt release:prod)
	// The default env is test
	grunt.registerMultiTask('release', 'Create a new stable version', function () {

		// Get the current target
		const target = this.data.target;
		grunt.config.set('currentTarget', target);

		// Run the release task
		grunt.task.run([
			'clean:release',
			'clean:devIndex',
			'wiredep',
			'preprocess:' + target,
			'jsMin:release',
			'less:main',
			'languages:release',
			'postcss:dev',
			'cssmin:dev',
			'string-replace:index',
			'useminPrepare',
			'usemin',
			'concat:generated',
			'uglify:vendors',
			'postcss:vendors',
			'cssmin:vendors',
			'htmlmin:release',
			'copy:release',
			'copy:i18n',
			'imagemin:release',
			'string-replace:cssPaths',
			'notify:release'
		]);
	});
};