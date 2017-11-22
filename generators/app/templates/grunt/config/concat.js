/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file concat on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 22:36
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	scripts: {
		src : [
			'.tmp/release/scripts/app.min.js',
			'.tmp/release/scripts/main.min.js'
		],
		dest: '.tmp/release/scripts/<%= appNameKebab %>.min.js'
	},
	js     : {
		src : [
			'<%%= paths.app %%>/**/*.js',
			'!<%%= paths.app %%>/**/*.tpl.js',
			'!<%%= paths.app %%>/scripts/<%= appNameKebab %>.js',
			'!<%%= paths.app %%>/scripts/<%= appNameKebab %>.min.js'
		],
		dest: '<%%= paths.app %%>/scripts/<%= appNameKebab %>.js'
	},
	release: {
		src : [
			'<%%= paths.app %%>/**/*.js',
			'.tmp/release/template-cache.js',
			'!<%%= paths.app %%>/**/*.tpl.js',
			'!<%%= paths.app %%>/scripts/<%= appNameKebab %>.js',
			'!<%%= paths.app %%>/scripts/<%= appNameKebab %>.min.js'
		],
		dest: '<%%= currentTarget %%>/scripts/<%= appNameKebab %>.js'
	}
};