/**
 <%- include('../../../../common/partial/header.txt') %>
 */
/* eslint key-spacing:"off" */
module.exports = {
	app: {
		src       : [
			'<%%= paths.app %%>/config/tpls/index.tpl.html'
		],
		ignorePath: /\.\.\//
	}
};