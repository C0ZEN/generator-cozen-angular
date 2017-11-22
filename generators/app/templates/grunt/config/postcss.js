/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file postcss on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 21:18
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = function (grunt) {
	return {
		dev    : {
			options: {
				map       : true,
				processors: [
					require('pixrem')(),
					require('autoprefixer')({
						browsers: grunt.file.read('package.json').browserslist,
						cascade : true,
						add     : true,
						remove  : false,
						supports: true,
						flexbox : true,
						grid    : true
					})
				]
			},
			files  : [
				{
					expand: true,
					cwd   : '<%%= paths.app %%>/styles/css',
					src   : '*.css',
					dest  : '<%%= paths.app %%>/styles/css'
				}
			]
		},
		vendors: {
			options: '<%%= postcss.dev.options %%>',
			files  : {
				'<%%= currentTarget %%>/styles/vendor.css': '<%%= currentTarget %%>/styles/vendor.css'
			}
		}
	};
};