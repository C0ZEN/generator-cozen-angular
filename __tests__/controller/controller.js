/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const assert  = require('yeoman-assert');
	const helpers = require('yeoman-test');

	const appName = 'Test Controller';

	describe('generator-cozen-angular:controller', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/controller'))
				.withPrompts({
					appName        : appName,
					isThisYou      : true,
					authorFirstName: 'Geoffrey',
					authorLastName : 'Testelin',
					authorEmail    : 'geoffrey.testelin@gmail.com'
				});
		});

		it('create controller js file', () => {
			assert.file([
				'app/scripts/controllers/controllerName.controller.js'
			]);
		});
	});
})();