/**
 * Generated header by C0ZEN for generator-altran-angular project
 * Generated file jsMin on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/11/2017
 * Time: 21:52
 * Version: 1.0.0
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	grunt.registerMultiTask('jsMin', 'JS min task to compile the .js', function () {

		// Get the current target
		const target = this.target;

		// Run the jsMin task
		if ('dev' === target) {
			grunt.task.run([
				'concat:js',
				'uglify:dev',
				'merge-json:min'
			]);
		}
		else if ('release' === target) {
			grunt.task.run([
				'ngtemplates:release',
				'concat:release',
				'uglify:release',
				'merge-json:min'
			]);
		}
	});
};