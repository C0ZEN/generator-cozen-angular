/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const assert  = require('yeoman-assert');
	const helpers = require('yeoman-test');

	const appName = 'Test View for new user';

	describe('generator-cozen-angular:view', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../generators/view'))
				.withPrompts({
					appName        : appName,
					isThisYou      : false,
					authorFirstName: 'Geoffrey',
					authorLastName : 'Testelin',
					authorEmail    : 'geoffrey.testelin@gmail.com',
					stateAbstract  : true
				});
		});

		it('create view js files', () => {
			assert.file([
				'viewName/viewName.controller.js',
				'viewName/viewName.state.js',
				'viewName/viewName.service.js',
				'viewName/viewName.constant.js'
			]);
		});

		it('create view html files', () => {
			assert.file([
				'viewName/viewName.template.html'
			]);
		});

		it('create view styles files', () => {
			assert.file([
				'viewName/styles/viewName.less',
				'viewName/styles/viewName.mixins.less',
				'viewName/styles/viewName.variables.less'
			]);
		});

		it('create view languages files', () => {
			assert.file([
				'viewName/languages/fr.json',
				'viewName/languages/en.json'
			]);
		});
	});
})();