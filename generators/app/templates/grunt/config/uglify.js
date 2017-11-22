/**
 <%- include('../../partial/header.txt') %>
 */
/* eslint key-spacing:"off" */
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
module.exports = {
	release: {
		options: {
			compress : {
				drop_debugger: false
			},
			mangle   : false,
			sourceMap: true
		},
		files  : {
			'<%%= currentTarget %%>/scripts/<%= appNameKebab %>.min.js': '<%%= currentTarget %%>/scripts/<%= appNameKebab %>.js'
		}
	},
	dev    : {
		options: {
			compress : {
				drop_debugger: false
			},
			mangle   : false,
			sourceMap: true
		},
		files  : {
			'<%%= paths.app %%>/scripts/<%= appNameKebab %>.min.js': '<%%= paths.app %%>/scripts/<%= appNameKebab %>.js'
		}
	},
	vendors: {
		options: {
			compress : {
				drop_debugger: false
			},
			mangle   : false,
			sourceMap: false
		},
		files  : {
			'<%%= currentTarget %%>/scripts/vendor.js': '<%%= currentTarget %%>/scripts/vendor.js'
		}
	}
};