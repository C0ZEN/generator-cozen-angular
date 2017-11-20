/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file imagemin on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 22:35
 * Version: 1.0.0
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