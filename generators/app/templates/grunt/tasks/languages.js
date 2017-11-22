/**
 <%- include('../../partial/header.txt') %>
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