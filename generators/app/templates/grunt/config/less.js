/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file less on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 22:36
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	main: {
		options: {
			compress : false,
			sourceMap: true
		},
		files  : {
			'<%%= paths.app %%>/styles/css/<%= appNameKebab %>.css': '<%%= paths.app %%>/styles/less/<%= appNameKebab %>.less',
			'<%%= paths.app %%>/styles/css/init-loader.css'        : '<%%= paths.app %%>/styles/less/<%= appNameKebab %>.loader.less'
		}
	},
	tmp : {
		options: {
			compress : false,
			sourceMap: true
		},
		files  : {
			'.tmp/release/styles/<%= appNameKebab %>.css': '<%%= paths.app %%>/styles/less/<%= appNameKebab %>.less',
			'.tmp/release/styles/init-loader.css'        : '<%%= paths.app %%>/styles/less/<%= appNameKebab %>.loader.less'
		}
	}
};