/**
 <%- include('../../../../common/partial/header.txt') %>
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