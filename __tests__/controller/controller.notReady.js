/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const helpers = require('yeoman-test');

	describe('generator-cozen-angular:controller', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/controller'))
				.withPrompts({
					areYouReady: false
				})
				.on('error', function ($error) {
					console.log('Error !', $error);
				});
		});

		it('is not ready');

		it('close the current running generator');
	});
})();