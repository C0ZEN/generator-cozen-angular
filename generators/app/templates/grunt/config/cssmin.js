/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file cssmin on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 21:35
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	dev    : {
		options: {
			keepSpecialComments: 0,
			sourceMap          : true
		},
		files  : [
			{
				'<%%= paths.app %%>/styles/css/<%= appNameKebab %>.min.css': '<%%= paths.app %%>/styles/css/<%= appNameKebab %>.css',
				'<%%= paths.app %%>/styles/css/init-loader.min.css'        : '<%%= paths.app %%>/styles/css/init-loader.css'
			}
		]
	},
	vendors: {
		options: {
			keepSpecialComments: 0,
			sourceMap          : false
		},
		files  : [
			{
				'<%%= currentTarget %%>/styles/vendor.css': '<%%= currentTarget %%>/styles/vendor.css'
			}
		]
	}
};