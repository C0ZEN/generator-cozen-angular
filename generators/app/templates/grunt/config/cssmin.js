/**
 <%- include('../../partial/header.txt') %>
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