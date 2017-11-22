/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file languages on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/11/2017
 * Time: 21:51
 * Version: 1.0.0
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	grunt.registerMultiTask('languages', 'Languages task to compile the .json', () => {

		// Get the current target
		const target = this.target;

		// Run the languages task
		if ('dev' === target) {
			grunt.task.run([
				'clean:languages',
				'merge-json:merge',
				'merge-json:min'
			]);
		}
		else if ('release' === target) {
			grunt.task.run([
				'clean:languages',
				'merge-json:merge',
				'merge-json:min',
				'copy:languages'
			]);
		}
	});
};