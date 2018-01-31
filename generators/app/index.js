(function () {
	'use strict';

	const Generator     = require('yeoman-generator');
	const chalkInstance = require('chalk');
	const chalk         = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const yosay         = require('yosay');
	const moment        = require('moment');

	const colors = require('../common/colors.js');
	const utils  = require('../common/utils.js');
	const logs   = require('../common/logs.js');

	const appName        = require('./inputs/appName.js');
	const appDescription = require('./inputs/appDescription.js');
	const theme          = require('./inputs/theme.js');
	const lang           = require('./inputs/lang.js');
	const color          = require('./inputs/color.js');
	const author         = require('./inputs/author.js');
	const authorEmail    = require('./inputs/authorEmail.js');
	const aal            = require('./inputs/aal.js');
	const twitterName    = require('./inputs/twitterName.js');
	const validate       = require('./inputs/validate.js');

	const writingMain        = require('./writing/main.js');
	const writingMarkdown    = require('./writing/markdown.js');
	const writingLinter      = require('./writing/linter.js');
	const writingJson        = require('./writing/json.js');
	const writingProviders   = require('./writing/providers.js');
	const writingDirectories = require('./writing/directories.js');
	const writingApp         = require('./writing/app.js');
	const writingTargets     = require('./writing/targets.js');
	const writingLanguages   = require('./writing/languages.js');
	const writingStyles      = require('./writing/styles.js');
	const writingTpls        = require('./writing/tpls.js');
	const writingGruntConfig = require('./writing/gruntConfig.js');
	const writingGruntTasks  = require('./writing/gruntTasks.js');

	module.exports = class extends Generator {
		initializing() {
			logs.priority(this, 'initializing', true);

			moment.locale('en');

			this.log(yosay('Welcome to the wonderful ' + chalk.hex(colors.get('red'))('generator-cozen-angular') + ' generator !'));

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
				if (!this.areYouReady) {
					this.env.error('You are not ready !');
				}
			});
		}

		prompting() {
			logs.priority(this, 'prompting', true);
		}

		configuring() {
			logs.priority(this, 'configuring', false);
			this.currentVersion = '0.0.0';
		}

		inputAppName() {
			return appName.set(this);
		}

		inputAppDescription() {
			return appDescription.set(this);
		}

		inputTheme() {
			return theme.set(this);
		}

		inputLang() {
			return lang.set(this);
		}

		inputColor() {
			return color.set(this);
		}

		inputAuthor() {
			return author.set(this);
		}

		inputAuthorEmail() {
			return authorEmail.set(this);
		}

		inputAal() {
			return aal.set(this);
		}

		inputTwitterName() {
			return twitterName.set(this);
		}

		inputValidate() {
			return validate.set(this);
		}

		writing() {
			this.now     = moment();
			this.nowDate = this.now.format('DD/MM/YYYY');
			this.nowTime = this.now.format('HH:mm');
			this.log('Now :', chalk.hex(colors.get('cyan'))(this.nowDate, this.nowTime));

			logs.priority(this, 'writing', true);
			writingMain(this);
			writingMarkdown(this);
			writingLinter(this);
			writingJson(this);
			writingProviders(this);
			writingApp(this);
			writingTargets(this);
			writingTpls(this);
			writingLanguages(this);
			writingStyles(this);
			writingDirectories();
			writingGruntConfig(this);
			writingGruntTasks(this);
		}

		conflicts() {
			logs.priority(this, 'conflicts', false);
		}

		install() {
			logs.priority(this, 'install', true);

			utils.installNpmPackages(this);
			utils.installBowerPackages(this);
		}

		end() {
			logs.priority(this, 'end', true);
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
	};

})();
