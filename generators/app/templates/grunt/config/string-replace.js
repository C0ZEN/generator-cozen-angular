/**
 <%- include('../../partial/header.txt') %>
 */
/* eslint key-spacing:"off" */
module.exports = {
	devIndex: {
		options: {
			replacements: [
				{
					pattern    : /(..\/..\/)/gmi,
					replacement: ''
				}
			]
		},
		expand : true,
		cwd    : '<%%= paths.app %%>',
		src    : 'index.html',
		dest   : '<%%= paths.app %%>'
	},
	index   : {
		options: '<%%= string-replace.devIndex.options %%>',
		expand : true,
		cwd    : '<%%= currentTarget %%>',
		src    : 'index.html',
		dest   : '<%%= currentTarget %%>'
	},
	cssPaths: {
		options: {
			replacements: [
				{
					pattern    : /(\.\.\/)+/gmi,
					replacement: '../'
				}
			]
		},
		files  : {
			'<%%= currentTarget %%>/styles/<%= appNameKebab %>.css'    : '<%%= currentTarget %%>/styles/<%= appNameKebab %>.css',
			'<%%= currentTarget %%>/styles/<%= appNameKebab %>.min.css': '<%%= currentTarget %%>/styles/<%= appNameKebab %>.min.css'
		}
	}
};