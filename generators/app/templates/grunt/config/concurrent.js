/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file concurrent on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 22:35
 * Version: 1.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	server : [
		'copy:styles'
	],
	test   : [
		'copy:styles'
	],
	release: [
		'copy:release',
		'copy:components',
		'imagemin:release'
	]
};