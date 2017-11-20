/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file preprocess on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 22:36
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = function (grunt) {
	return {
		options: {
			inline: true
		},
		dev    : {
			options: {
				context: {
					config: grunt.file.read('app/config/targets/config.dev.json'),
					target: 'dev'
				}
			},
			files  : {
				'<%%= paths.app %%>/config/target.config.js': '<%%= paths.app %%>/config/tpls/target.config.tpl.js',
				'<%%= paths.app %%>/index.html'             : '<%%= paths.app %%>/config/tpls/index.tpl.html'
			}
		},
		test   : {
			options: {
				context: {
					config: grunt.file.read('app/config/targets/config.test.json'),
					target: 'test'
				}
			},
			files  : {
				'<%%= paths.app %%>/config/target.config.js': '<%%= paths.app %%>/config/tpls/target.config.tpl.js',
				'<%%= currentTarget %%>/index.html'         : '<%%= paths.app %%>/config/tpls/index.tpl.html'
			}
		},
		preprod: {
			options: {
				context: {
					config: grunt.file.read('app/config/targets/config.preprod.json'),
					target: 'preprod'
				}
			},
			files  : {
				'<%%= paths.app %%>/config/target.config.js': '<%%= paths.app %%>/config/tpls/target.config.tpl.js',
				'<%%= currentTarget %%>/index.html'         : '<%%= paths.app %%>/config/tpls/index.tpl.html'
			}
		},
		prod   : {
			options: {
				context: {
					config: grunt.file.read('app/config/targets/config.prod.json'),
					target: 'prod'
				}
			},
			files  : {
				'<%%= paths.app %%>/config/target.config.js': '<%%= paths.app %%>/config/tpls/target.config.tpl.js',
				'<%%= currentTarget %%>/index.html'         : '<%%= paths.app %%>/config/tpls/index.tpl.html'
			}
		}
	};
};