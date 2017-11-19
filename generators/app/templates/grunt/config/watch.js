/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file watch on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 21:10
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	targets   : {
		files: [
			'<%%= paths.app %%>/config/targets/*.json'
		],
		tasks: [
			'preprocess:dev'
		]
	},
	languages : {
		files: [
			'<%%= paths.app %%>/languages/**/*.json',
			'<%%= paths.app %%>/scripts/**/*.json',
			'<%%= paths.app %%>/views/**/*.json',
			'!<%%= paths.app %%>/languages/min/*.json'
		],
		tasks: [
			'languages:dev'
		]
	},
	js        : {
		files: [
			'<%%= paths.app %%>/**/*.js',
			'Gruntfile.js'
		],
		tasks: [
			'jsMin:dev',
			'notify:buildReady'
		]
	},
	less      : {
		files: [
			'<%%= paths.app %%>/**/*.less'
		],
		tasks: [
			'less:main',
			'postcss:dev',
			'cssmin:dev',
			'notify:less'
		]
	},
	html      : {
		files: [
			'<%%= paths.app %%>/**/*.html',
			'!<%%= paths.app %%>/index.html'
		],
		tasks: [
			'wiredep',
			'preprocess:dev',
			'string-replace:devIndex',
			'htmlmin:dev',
			'jsMin:dev',
			'notify:buildReady'
		]
	},
	livereload: {
		options: {
			livereload: '<%%= connect.options.livereload %%>'
		},
		files  : [
			'<%%= paths.app %%>/scripts/<%= appNameKebab %>.min.js',
			'<%%= paths.app %%>/styles/css/*.css',
			'<%%= paths.app %%>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
		]
	}
};