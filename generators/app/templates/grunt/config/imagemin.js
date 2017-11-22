/**
 <%- include('../../partial/header.txt') %>
 */
/* eslint key-spacing:"off" */
module.exports = {
	release: {
		options: {
			optimizationLevel: 5,
			progressive      : true,
			interlaced       : true
		},
		files  : [
			{
				expand: true,
				cwd   : '<%%= paths.app %%>/images',
				src   : '**/*.{png,jpg,jpeg,gif,svg}',
				dest  : '<%%= currentTarget %%>/images'
			}
		]
	}
};