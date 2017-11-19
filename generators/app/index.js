(function () {
	'use strict';

	const Generator      = require('yeoman-generator');
	const chalkInstance  = require('chalk');
	const chalk          = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const yosay          = require('yosay');
	const upperCase      = require('upper-case');
	const moment         = require('moment');
	const colors         = require('./colors.js');
	const utils          = require('./utils.js');
	const appName        = require('./inputs/appName.js');
	const appDescription = require('./inputs/appDescription.js');
	const theme          = require('./inputs/theme.js');
	const lang           = require('./inputs/lang.js');
	const color          = require('./inputs/color.js');
	const author         = require('./inputs/author.js');
	const authorEmail    = require('./inputs/authorEmail.js');

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
			return appName(this);
		}

		inputAppDescription() {
			return appDescription(this);
		}

		inputTheme() {
			return theme(this);
		}

		inputLang() {
			return lang(this);
		}

		inputColor() {
			return color(this);
		}

		inputAuthor() {
			return author(this);
		}

		inputAuthorEmail() {
			return authorEmail(this);
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
			utils.copyFile(this, '.bowerrc');
			utils.copyFile(this, '.editorconfig');
			utils.copyFileTpl(this, '.eslintignore', {
				appNameKebab: this.appNameKebab
			});
			utils.copyFile(this, '.eslintrc');
			utils.copyFile(this, '.gitattributes');
			utils.copyFileTpl(this, '.gitignore', {
				appNameKebab: this.appNameKebab
			});
			utils.copyFile(this, '.jscsrc');
			utils.copyFile(this, '.jshintrc');
			utils.copyFileTpl(this, 'bower.json', {
				appNameKebab: this.appNameKebab,
				theme       : this.theme
			});
			utils.copyFile(this, 'CHANGELOG.md');
			utils.copyFile(this, 'CONTRIBUTING.md');
			utils.copyFileTpl(this, 'Gruntfile.js', {
				appNameCamel: this.appNameCamel,
				appNameKebab: this.appNameKebab
			});
			utils.copyFileTpl(this, 'manifest.json', {
				lang           : this.lang,
				appDescription : this.appDescription,
				appName        : this.appName,
				backgroundColor: this.backgroundColor,
				themeColor     : this.themeColor
			});
			utils.copyFileTpl(this, 'LICENSE.md', {
				appName: this.appName
			});
			utils.copyFileTpl(this, 'package.json', {
				appNameKebab  : this.appNameKebab,
				appDescription: this.appDescription,
				authorLong    : this.authorLong
			});
			utils.copyFileTpl(this, 'README.md', {
				appName       : this.appName,
				appDescription: this.appDescription,
				authorShort   : this.authorShort,
				authorEmail   : this.authorEmail
			});

			// App architecture
			utils.copyFileTpl(this, 'app/config/providers/apiProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			utils.copyFileTpl(this, 'app/config/providers/appProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			utils.copyFileTpl(this, 'app/config/providers/debugProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			utils.copyFileTpl(this, 'app/config/providers/dynamicLocaleProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			utils.copyFileTpl(this, 'app/config/providers/httpProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			utils.copyFileTpl(this, 'app/config/providers/languageProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			utils.copyFileTpl(this, 'app/config/providers/locationProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			utils.copyFileTpl(this, 'app/config/providers/themeProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			utils.copyFileTpl(this, 'app/config/providers/titleProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			utils.copyFileTpl(this, 'app/config/providers/translateProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			utils.copyFileTpl(this, 'app/config/providers/urlRouterProvider.config.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});
			utils.copyFileTplWithMultipleDestinations(this, 'app/config/targets/config.json',
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
			utils.copyFileTpl(this, 'app/config/tpls/index.tpl.html', {
				appNameCamel: this.appNameCamel,
				lang        : this.lang,
				appNameKebab: this.appNameKebab,
				themeColor  : this.themeColor
			});
			utils.copyFileTpl(this, 'app/config/tpls/target.config.tpl.js', {
				appNameCamel: this.appNameCamel
			});
			utils.copyFileTpl(this, 'app/languages/en/global.json', {
				appNameUpperPython: this.appNameUpperPython,
				appName           : this.appName
			});
			utils.copyFileTpl(this, 'app/languages/fr/global.json', {
				appNameUpperPython: this.appNameUpperPython,
				appName           : this.appName
			});
			utils.copyFileTplWithMultipleDestinations(this, 'app/styles/less/app.less',
				{
					theme       : this.theme,
					appNameKebab: this.appNameKebab
				},
				[
					'app/styles/less/' + this.appNameKebab + '.less'
				]
			);
			utils.copyFileTplWithMultipleDestinations(this, 'app/styles/less/app.loader.less',
				{
					theme: this.theme
				},
				[
					'app/styles/less/' + this.appNameKebab + '.loader.less'
				]
			);
			utils.copyFileTplWithMultipleDestinations(this, 'app/styles/less/app.variables.less', null, [
				'app/styles/less/' + this.appNameKebab + '.variables.less'
			]);
			utils.copyFileTpl(this, 'app/app.js', {
				appNameKebab: this.appNameKebab,
				appNameCamel: this.appNameCamel,
				authorShort : this.authorShort,
				nowDate     : this.nowDate,
				nowTime     : this.nowTime
			});

			utils.newDirectory(this, [
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
				utils.installNpmPackages(this);
				utils.installBowerPackages(this);
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

	module.exports = Base;
})();
