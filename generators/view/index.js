/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file index on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 13:10
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const Generator     = require('yeoman-generator');
	const chalkInstance = require('chalk');
	const chalk         = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const moment        = require('moment');

	const colors = require('../common/colors.js');
	const logs   = require('../common/logs.js');

	const isThisYou    = require('./inputs/isThisYou.js');
	const author       = require('./inputs/author.js');
	const authorEmail  = require('./inputs/authorEmail.js');
	const viewName     = require('./inputs/viewName.js');
	const viewUrl      = require('./inputs/viewUrl.js');
	const viewAbstract = require('./inputs/viewAbstract.js');

	const writingJsFiles        = require('./writing/jsFiles.js');
	const writingHtmlFiles      = require('./writing/htmlFiles.js');
	const writingStylesFiles    = require('./writing/stylesFiles.js');
	const writingLanguagesFiles = require('./writing/languagesFiles.js');

	module.exports = class extends Generator {
		initializing() {
			logs.priority(this, 'initializing');

			moment.locale('en');

			const prompts = [
				{
					type   : 'confirm',
					name   : 'areYouReady',
					message: 'Are you ready to set up a new view for the ' + this.config.get('appNameCamel') + ' app ?',
					default: true
				}
			];

			return this.prompt(prompts).then($response => {
				this.areYouReady = $response.areYouReady;
			});
		}

		prompting() {
			logs.priority(this, 'prompting', true);
		}

		configuring() {
			logs.priority(this, 'configuring', false);
		}

		inputIsThisYou() {
			return isThisYou.set(this);
		}

		inputAuthor() {
			if (!this.isThisYou) {
				return author.set(this);
			}
			return null;
		}

		inputAuthorEmail() {
			if (!this.isThisYou) {
				return authorEmail(this);
			}
			return null;
		}

		inputViewName() {
			return viewName.set(this);
		}

		inputViewUrl() {
			return viewUrl.set(this);
		}

		inputViewAbstract() {
			return viewAbstract.set(this);
		}

		writing() {
			this.now     = moment();
			this.nowDate = this.now.format('DD/MM/YYYY');
			this.nowTime = this.now.format('HH:mm');
			this.log('Now :', chalk.hex(colors.get('cyan'))(this.nowDate, this.nowTime));

			logs.priority(this, 'writing', true);
			writingJsFiles(this);
			writingHtmlFiles(this);
			writingStylesFiles(this);
			writingLanguagesFiles(this);
		}

		conflicts() {
			logs.priority(this, 'conflicts', false);
		}

		install() {
			logs.priority(this, 'install', true);
		}

		end() {
			logs.priority(this, 'end', false);
			this.log(chalk.hex(colors.get('green'))('Your view is ready ;)'));
		}
	};

})();
