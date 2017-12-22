/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const assert  = require('yeoman-assert');
	const helpers = require('yeoman-test');

	const appName = 'Test Service';

	describe('generator-cozen-angular:service', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/service'))
				.withPrompts({
					appName        : appName,
					isThisYou      : true,
					authorFirstName: 'Geoffrey',
					authorLastName : 'Testelin',
					authorEmail    : 'geoffrey.testelin@gmail.com'
				});
		});

		it('create service js file', () => {
			assert.file([
				'app/scripts/services/serviceName.service.js'
			]);
		});
	});
})();