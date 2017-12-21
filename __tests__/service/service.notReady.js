/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const helpers = require('yeoman-test');

	let originalTimeout;

	describe('generator-cozen-angular:service', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/service'))
				.withPrompts({
					areYouReady: false
				})
				.on('error', function ($error) {
					console.log('Error !', $error);
				});
		});

		beforeEach(() => {
			originalTimeout                  = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
		});

		afterEach(() => {
			jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		});

		it('is not ready');

		it('close the current running generator');
	});
})();