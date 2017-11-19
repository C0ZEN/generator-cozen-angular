(function () {
	'use strict';

	const Generator     = require('yeoman-generator');
	const chalkInstance = require('chalk');
	const chalk         = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const yosay         = require('yosay');
	const upperCase     = require('upper-case');
	const moment        = require('moment');
	const mkdirp        = require('mkdirp');
	const _             = require('lodash');
	const colors        = require('./colors.js');
	const npm           = require('./dependencies/npm.js');
	const bower         = require('./dependencies/bower.js');

	const debug       = true;
	const skipInstall = false;

	class Base extends Generator {
		constructor($args, $opts) {
			super($args, $opts);

			this.logFnCalled = $target => {
				if (debug) {
					this.log(chalk.hex(colors.get('blue'))('[' + $target + ']'), 'Called');
				}
			};

			this.logPriority = ($priority, $spaceBefore) => {
				if ($spaceBefore) {
					this.log('');
				}
				this.log(chalk.hex(colors.get('orange')).bold('>>> %s <<<\n'), upperCase($priority));
			};

			this.logHint = $text => {
				if ($text) {
					this.log(chalk.hex(colors.get('purple'))($text + '\n'));
				}
				else {
					this.log(chalk.hex(colors.get('purple')).bold('Hint:\n'));
				}
			};

			this.copyFile = $path => {
				this.fs.copy(this.templatePath($path), this.destinationPath($path));
			};

			this.copyFileTpl = ($path, $data) => {
				this.fs.copyTpl(this.templatePath($path), this.destinationPath($path), $data);
			};

			this.copyFileTplWithMultipleDestinations = ($path, $data, $destinations) => {
				_.forEach($destinations, $destination => {
					this.fs.copyTpl(
						this.templatePath($path),
						this.destinationPath($destination),
						$data
					);
				});
			};

			this.newDirectory = $paths => {
				if (_.isArray($paths)) {
					_.forEach($paths, $path => {
						mkdirp.sync($path);
					});
				}
				else {
					mkdirp.sync($paths);
				}
			};

			this.installNpmPackages = () => {
				this.npmInstall(npm.getModules(), {
					'save-dev': true
				});
			};

			this.installBowerPackages = () => {
				this.bowerInstall(bower.getModules(), {
					'save-dev': false
				});
			};
		}

		initializing() {
			this.logPriority('initializing');

			moment.locale('en');

			this.log(yosay('Welcome to the wonderful ' + chalk.hex(colors.get('red'))('generator-altran-angular') + ' generator !'));

			const prompts = [
				{
					type   : 'confirm',
					name   : 'areYouReady',
					message: 'Are you ready to set up your app ?',
					default: true
				}
			];

			return this.prompt(prompts).then($response => {
				this.areYouReady = $response.areYouReady;
			});
		}

		prompting() {
			this.logPriority('prompting', true);
		}

		inputAppName() {
			return this.appName(this);
		}

		inputAppDescription() {
			return this.appDescription(this);
		}

		inputTheme() {
			return this.theme(this);
		}

		inputLang() {
			return this.lang(this);
		}

		inputColor() {
			return this.color(this);
		}

		inputAuthor() {
			return this.author(this);
		}

		inputAuthorEmail() {
			return this.authorEmail(this);
		}

		configuring() {
			this.logPriority('configuring', true);
		}

		writing() {
			this.now     = moment();
			this.nowDate = this.now.format('DD/MM/YYYY');
			this.nowTime = this.now.format('HH:mm');

			this.log('Now :', chalk.hex(colors.get('cyan'))(this.nowDate, this.nowTime));
			this.log();

			this.logPriority('writing', true);

			// Default architecture
			this.copyFile('.bowerrc');
			this.copyFile('.editorconfig');
			this.copyFileTpl('.eslintignore', {
				appNameKebab: this.appNameKebab
			});
			this.copyFile('.eslintrc');
			this.copyFile('.gitattributes');
			this.copyFileTpl('.gitignore', {
				appNameKebab: this.appNameKebab
			});
			this.copyFile('.jscsrc');
			this.copyFile('.jshintrc');
			this.copyFileTpl('bower.json', {
				appNameKebab: this.appNameKebab,
				theme       : this.theme
			});
			this.copyFile('CHANGELOG.md');
			this.copyFile('CONTRIBUTING.md');
			this.copyFileTpl('Gruntfile.js', {
				appNameCamel: this.appNameCamel,
				appNameKebab: this.appNameKebab
			});
			this.copyFileTpl('manifest.json', {
				lang           : this.lang,
				appDescription : this.appDescription,
				appName        : this.appName,
				backgroundColor: this.backgroundColor,
				themeColor     : this.themeColor
			});
			this.copyFileTpl('LICENSE.md', {
				appName: this.appName
			});
			this.copyFileTpl('package.json', {
				appNameKebab  : this.appNameKebab,
				appDescription: this.appDescription,
				authorLong    : this.authorLong
			});
			this.copyFileTpl('README.md', {
				appName       : this.appName,
				appDescription: this.appDescription,
				authorShort   : this.authorShort,
				authorEmail   : this.authorEmail
			});

			// App architecture
			this.copyFileTpl('app/config/providers/apiProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			this.copyFileTpl('app/config/providers/appProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			this.copyFileTpl('app/config/providers/debugProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			this.copyFileTpl('app/config/providers/dynamicLocaleProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			this.copyFileTpl('app/config/providers/httpProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			this.copyFileTpl('app/config/providers/languageProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			this.copyFileTpl('app/config/providers/locationProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			this.copyFileTpl('app/config/providers/themeProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			this.copyFileTpl('app/config/providers/titleProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			this.copyFileTpl('app/config/providers/translateProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			this.copyFileTpl('app/config/providers/urlRouterProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			this.copyFileTplWithMultipleDestinations('app/config/targets/config.json',
				{
					lang        : this.lang,
					theme       : this.theme,
					appName     : this.appName,
					appNameKebab: this.appNameKebab
				},
				[
					'app/config/targets/config.dev.json',
					'app/config/targets/config.test.json',
					'app/config/targets/config.prod.json',
					'app/config/targets/config.preprod.json'
				]);
			this.copyFileTpl('app/config/tpls/index.tpl.html', {
				appNameCamel: this.appNameCamel,
				lang        : this.lang,
				appNameKebab: this.appNameKebab,
				themeColor  : this.themeColor
			});
			this.copyFileTpl('app/config/tpls/target.config.tpl.js', {
				appNameCamel: this.appNameCamel
			});
			this.copyFileTpl('app/languages/en/global.json', {
				appNameUpperPython: this.appNameUpperPython,
				appName           : this.appName
			});
			this.copyFileTpl('app/languages/fr/global.json', {
				appNameUpperPython: this.appNameUpperPython,
				appName           : this.appName
			});
			this.copyFileTplWithMultipleDestinations(
				'app/styles/less/app.less',
				{
					theme       : this.theme,
					appNameKebab: this.appNameKebab
				},
				[
					'app/styles/less/' + this.appNameKebab + '.less'
				]
			);
			this.copyFileTplWithMultipleDestinations(
				'app/styles/less/app.loader.less',
				{
					theme: this.theme
				},
				[
					'app/styles/less/' + this.appNameKebab + '.loader.less'
				]
			);
			this.copyFileTplWithMultipleDestinations('app/styles/less/app.variables.less', null, [
				'app/styles/less/' + this.appNameKebab + '.variables.less'
			]);
			this.copyFileTpl('app/app.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});

			this.newDirectory([
				'app/images',
				'app/images/gif',
				'app/images/jpg',
				'app/images/png',
				'app/images/svg',
				'app/medias',
				'app/medias/sounds',
				'app/medias/videos',
				'app/scripts',
				'app/scripts/directives',
				'app/scripts/filters',
				'app/scripts/services',
				'app/scripts/constants',
				'app/scripts/providers',
				'app/styles/css',
				'app/styles/less/override',
				'app/views/'
			]);
		}

		conflicts() {
			this.logPriority('conflicts', true);
		}

		install() {
			this.logPriority('install', true);

			if (!skipInstall) {
				this.installNpmPackages();
				this.installBowerPackages();
			}
			else {
				this.log(chalk.hex(colors.get('blue'))('Install was skipped.'));
			}
		}

		end() {
			this.logPriority('end', true);
			this.log(chalk.hex(colors.get('green'))('That\'s all folks !'));
			this.log(chalk.hex(colors.get('green'))('Your project is ready ;)\n'));
			this.log(
				'Use the',
				chalk.hex(colors.get('navy')).bgHex(colors.get('grey'))('grunt-cli'),
				'or',
				chalk.hex(colors.get('navy')).bgHex(colors.get('grey'))('grunt serve'),
				'to start the server.'
			);
		}
	}

	Base.prototype.appName        = require('./inputs/appName.js');
	Base.prototype.appDescription = require('./inputs/appDescription.js');
	Base.prototype.theme          = require('./inputs/theme.js');
	Base.prototype.lang           = require('./inputs/lang.js');
	Base.prototype.color          = require('./inputs/color.js');
	Base.prototype.author         = require('./inputs/author.js');
	Base.prototype.authorEmail    = require('./inputs/authorEmail.js');

	module.exports = Base;
})();
