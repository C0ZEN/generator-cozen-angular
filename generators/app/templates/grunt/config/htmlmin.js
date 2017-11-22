/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file htmlmin on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 22:35
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	dev    : {
		options: {
			collapseBooleanAttributes: true,
			collapseWhitespace       : true,
			removeAttributeQuotes    : true,
			removeComments           : true,
			removeCommentsFromCDATA  : true
		},
		files  : [
			{
				expand: true,
				cwd   : '<%%= paths.app %%>',
				src   : 'index.html',
				dest  : '<%%= paths.app %%>'
			}
		]
	},
	release: {
		options: '<%%= htmlmin.dev.options %%>',
		files  : [
			{
				expand: true,
				cwd   : '<%%= currentTarget %%>',
				src   : 'index.html',
				dest  : '<%%= currentTarget %%>'
			}
		]
	}
};