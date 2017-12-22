/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const helpers = require('yeoman-test');

	describe('generator-cozen-angular:filter', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/filter'))
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