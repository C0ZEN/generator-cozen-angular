/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const assert  = require('yeoman-assert');
	const helpers = require('yeoman-test');

	const appName = 'Test Provider';

	jest.setTimeout(require('../../package.json').jestJasmineTimeout);

	describe('generator-cozen-angular:provider', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/provider'))
				.withPrompts({
					appName        : appName,
					isThisYou      : false,
					authorFirstName: 'Geoffrey',
					authorLastName : 'Testelin',
					authorEmail    : 'geoffrey.testelin@gmail.com'
				});
		});

		it('create provider js file', () => {
			assert.file([
				'app/scripts/providers/providerName.provider.js'
			]);
		});
	});
})();