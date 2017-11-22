/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file serve on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/11/2017
 * Time: 21:49
 * Version: 1.0.0
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