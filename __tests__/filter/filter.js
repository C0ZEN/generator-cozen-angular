/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const assert  = require('yeoman-assert');
	const helpers = require('yeoman-test');

	const appName = 'Test Filter';

	jest.setTimeout(require('../../package.json').jestJasmineTimeout);

	describe('generator-cozen-angular:filter', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/filter'))
				.withPrompts({
					appName        : appName,
					isThisYou      : true,
					authorFirstName: 'Geoffrey',
					authorLastName : 'Testelin',
					authorEmail    : 'geoffrey.testelin@gmail.com',
					filterName     : 'filterName'
				});
		});

		it('create filter js file', () => {
			assert.file([
				'app/scripts/filters/filterName.filter.js'
			]);
		});
	});
})();