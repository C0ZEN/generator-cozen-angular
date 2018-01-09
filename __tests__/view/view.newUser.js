/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const assert  = require('yeoman-assert');
	const helpers = require('yeoman-test');

	const appName = 'test';

	jest.setTimeout(require('../../package.json').jestJasmineTimeout);

	describe('generator-cozen-angular:view', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/view'))
				.withPrompts({
					appName,
					isThisYou      : false,
					authorFirstName: 'Geoffrey',
					authorLastName : 'Testelin',
					authorEmail    : 'geoffrey.testelin@gmail.com',
					stateAbstract  : true,
					viewName       : 'viewName'
				});
		});

		it('create view js files', () => {
			assert.file([
				'app/views/mainDirectory/viewName.controller.js',
				'app/views/mainDirectory/viewName.state.js',
				'app/views/mainDirectory/viewName.service.js',
				'app/views/mainDirectory/viewName.constant.js'
			]);
		});

		it('create view html files', () => {
			assert.file([
				'app/views/mainDirectory/viewName.template.html'
			]);
		});

		it('create view styles files', () => {
			assert.file([
				'app/views/mainDirectory/styles/viewName.less',
				'app/views/mainDirectory/styles/viewName.mixins.less',
				'app/views/mainDirectory/styles/viewName.variables.less'
			]);
		});

		it('create view languages files', () => {
			assert.file([
				'app/views/mainDirectory/languages/fr/fr.json',
				'app/views/mainDirectory/languages/en/en.json'
			]);
		});

		it('create or update main less file', () => {
			assert.file([
				'app/styles/less/main.less'
			]);
		});
	});
})();