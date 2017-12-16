/**
 <%- include('../../../../common/partial/header.txt') %>
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	grunt.registerMultiTask('jsMin', 'JS min task to compile the .js', () => {

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