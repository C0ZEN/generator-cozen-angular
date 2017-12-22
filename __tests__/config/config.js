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
					appName: appName
				});
		});

		it('update the app name');

		it('update the callback config in the package json file');
	});
})();