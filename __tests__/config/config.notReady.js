/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const helpers = require('yeoman-test');

	const appName = 'Test Config';

	describe('generator-cozen-angular:config', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/config'))
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