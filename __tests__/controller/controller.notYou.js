/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const assert  = require('yeoman-assert');
	const helpers = require('yeoman-test');

	const appName = 'Test Controller';

	let originalTimeout;

	describe('generator-cozen-angular:controller', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/controller'))
				.withPrompts({
					appName        : appName,
					isThisYou      : false,
					authorFirstName: 'Geoffrey',
					authorLastName : 'Testelin',
					authorEmail    : 'geoffrey.testelin@gmail.com'
				});
		});

		beforeEach(() => {
			originalTimeout                  = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
		});

		afterEach(() => {
			jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		});

		it('create controller js file', () => {
			assert.file([
				'app/scripts/controllers/controllerName.controller.js'
			]);
		});
	});
})();