/* jshint -W117 */
(function () {
	'use strict';

	const path    = require('path');
	const assert  = require('yeoman-assert');
	const helpers = require('yeoman-test');
	const _       = require('lodash');

	const appName      = 'Test App';
	const appNameKebab = _.kebabCase(appName);

	jest.setTimeout(30000);

	describe('generator-cozen-angular:app', () => {
		beforeAll(() => {
			return helpers.run(path.join(__dirname, '../../generators/app'))
				.withPrompts({
					appName        : appName,
					appDescription : 'Generated Test App',
					theme          : 'origin',
					lang           : 'en',
					backgroundColor: 'white',
					themeColor     : '#123456',
					authorFirstName: 'Geoffrey',
					authorLastName : 'Testelin',
					authorEmail    : 'geoffrey.testelin@gmail.com'
				});
		});

		it('create config json root files', () => {
			assert.file([
				'.eslintrc.json',
				'bower.json',
				'manifest.json',
				'package.json'
			]);
		});

		it('create config markdown root files', () => {
			assert.file([
				'CHANGELOG.md',
				'CONTRIBUTING.md',
				'LICENSE.md',
				'README.md'
			]);
		});

		it('create config root files', () => {
			assert.file([
				'.bowerrc',
				'.editorconfig',
				'.eslintignore',
				'.gitattributes',
				'.gitignore',
				'.jscsrc',
				'.jshintrc',
				'Gruntfile.js'
			]);
		});

		it('create app module file', () => {
			assert.file([
				'app/app.js'
			]);
		});

		it('create app config files', () => {
			assert.file([
				'app/config/providers/apiProvider.config.js',
				'app/config/providers/appProvider.config.js',
				'app/config/providers/debugProvider.config.js',
				'app/config/providers/dynamicLocaleProvider.config.js',
				'app/config/providers/httpProvider.config.js',
				'app/config/providers/languageProvider.config.js',
				'app/config/providers/locationProvider.config.js',
				'app/config/providers/themeProvider.config.js',
				'app/config/providers/titleProvider.config.js',
				'app/config/providers/translateProvider.config.js',
				'app/config/providers/urlRouterProvider.config.js',
				'app/config/targets/config.dev.json',
				'app/config/targets/config.test.json',
				'app/config/targets/config.preprod.json',
				'app/config/targets/config.prod.json',
				'app/config/tpls/index.tpl.html',
				'app/config/tpls/target.config.tpl.js'
			]);
		});

		it('create app images folders', () => {
			assert.file([
				'app/images/gif',
				'app/images/jpg',
				'app/images/png',
				'app/images/svg'
			]);
		});

		it('create app languages files', () => {
			assert.file([
				'app/languages/en/global.json',
				'app/languages/fr/global.json'
			]);
		});

		it('create app medias folders', () => {
			assert.file([
				'app/medias/sounds',
				'app/medias/videos'
			]);
		});

		it('create app scripts folders', () => {
			assert.file([
				'app/scripts/constants',
				'app/scripts/directives',
				'app/scripts/filters',
				'app/scripts/services',
				'app/scripts/providers'
			]);
		});

		it('create app styles files', () => {
			assert.file([
				'app/styles/css',
				'app/styles/less/' + appNameKebab + '.less',
				'app/styles/less/' + appNameKebab + '.loader.less',
				'app/styles/less/' + appNameKebab + '.variables.less'
			]);
		});

		it('create app views folder', () => {
			assert.file([
				'app/views'
			]);
		});

		it('create grunt config files', () => {
			assert.file([
				'grunt/config/clean.js',
				'grunt/config/concat.js',
				'grunt/config/concurrent.js',
				'grunt/config/connect.js',
				'grunt/config/copy.js',
				'grunt/config/cssmin.js',
				'grunt/config/htmlmin.js',
				'grunt/config/imagemin.js',
				'grunt/config/jsMin.js',
				'grunt/config/languages.js',
				'grunt/config/less.js',
				'grunt/config/merge-json.js',
				'grunt/config/ngtemplates.js',
				'grunt/config/notify.js',
				'grunt/config/notify_hooks.js',
				'grunt/config/postcss.js',
				'grunt/config/preprocess.js',
				'grunt/config/prettier.js',
				'grunt/config/release.js',
				'grunt/config/string-replace.js',
				'grunt/config/uglify.js',
				'grunt/config/usemin.js',
				'grunt/config/useminPrepare.js',
				'grunt/config/watch.js',
				'grunt/config/wiredep.js'
			]);
		});

		it('create grunt tasks files', () => {
			assert.file([
				'grunt/tasks/jsMin.js',
				'grunt/tasks/languages.js',
				'grunt/tasks/release.js',
				'grunt/tasks/serve.js'
			]);
		});
	});
})();