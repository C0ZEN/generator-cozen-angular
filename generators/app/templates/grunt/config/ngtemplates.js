/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file ngtemplates on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 22:35
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
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
};