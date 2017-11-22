/**
 <%- include('../../partial/header.txt') %>
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	grunt.registerTask('serve', 'Compile then start a connect web server', () => {
		grunt.task.run([
			'clean:server',
			'wiredep',
			'preprocess:dev',
			'string-replace:devIndex',
			'htmlmin:dev',
			'jsMin:dev',
			'less:main',
			'languages:dev',
			'concurrent:server',
			'postcss:dev',
			'cssmin:dev',
			'connect:livereload',
			'notify:serve',
			'watch'
		]);
	});
};