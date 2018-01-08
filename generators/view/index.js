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
	const config = require('../common/config.js');
	const utils  = require('../common/utils.js');

	const isThisYou     = require('../common/inputs/isThisYou.js');
	const author        = require('../common/inputs/author.js');
	const authorEmail   = require('../common/inputs/authorEmail.js');
	const mainDirectory = require('./inputs/mainDirectory.js');
	const viewName      = require('./inputs/viewName.js');
	const viewPath      = require('./inputs/viewPath.js');
	const stateName     = require('./inputs/stateName.js');
	const stateUrl      = require('./inputs/stateUrl.js');
	const stateAbstract = require('./inputs/stateAbstract.js');
	const stateParent   = require('./inputs/stateParent.js');
	const validate      = require('./inputs/validate.js');

	const writingJsFiles        = require('./writing/jsFiles.js');
	const writingHtmlFiles      = require('./writing/htmlFiles.js');
	const writingStylesFiles    = require('./writing/stylesFiles.js');
	const writingLanguagesFiles = require('./writing/languagesFiles.js');
	const writingMainLessFile   = require('./writing/mainLessFile.js');

	module.exports = class extends Generator {
		initializing() {
			logs.priority(this, 'initializing', true);

			moment.locale('en');

			config.updateWithCallback(this);

			const prompts = [
				{
					type   : 'confirm',
					name   : 'areYouReady',
					message: 'Are you ready to set up a new view for the ' + utils.getAppName(this) + ' app ?',
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
		}

		inputIsThisYou() {
			return isThisYou.set(this);
		}

		inputAuthor() {
			/* istanbul ignore next */
			if (!this.isThisYou) {
				return author.set(this);
			}
			/* istanbul ignore next */
			return null;
		}

		inputAuthorEmail() {
			/* istanbul ignore next */
			if (!this.isThisYou) {
				return authorEmail.set(this);
			}
			/* istanbul ignore next */
			return null;
		}

		inputMainDirectory() {
			return mainDirectory.set(this);
		}

		inputViewName() {
			return viewName.set(this);
		}

		inputViewPath() {
			return viewPath.set(this);
		}

		inputStateName() {
			return stateName.set(this);
		}

		inputStateUrl() {
			return stateUrl.set(this);
		}

		inputStateAbstract() {
			return stateAbstract.set(this);
		}

		inputStateParent() {
			return stateParent.set(this);
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
			writingJsFiles(this);
			writingHtmlFiles(this);
			writingStylesFiles(this);
			writingLanguagesFiles(this);
			writingMainLessFile(this);
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
