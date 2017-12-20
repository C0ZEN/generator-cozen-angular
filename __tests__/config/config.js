/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const helpers = require('yeoman-test');

	const appName = 'Test Config';

	let originalTimeout;

	describe('generator-cozen-angular:config', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/config'))
				.withPrompts({
					appName: appName
				});
		});

		beforeEach(() => {
			originalTimeout                  = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
		});

		afterEach(() => {
			jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		});

		it('update the app name');
	});
})();