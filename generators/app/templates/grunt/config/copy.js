/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file copy on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 22:35
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
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
};