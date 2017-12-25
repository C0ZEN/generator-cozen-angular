/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const helpers = require('yeoman-test');

	jest.setTimeout(require('../../package.json').jestJasmineTimeout);

	describe('generator-cozen-angular:constant', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/constant'))
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