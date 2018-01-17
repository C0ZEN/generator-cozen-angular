/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file index on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 17/01/2018
 * Time: 10:57
 * Version: 0.12.18
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
	const fileName      = require('./inputs/fileName.js');
	const filePath      = require('./inputs/filePath.js');
	const stateAbstract = require('./inputs/stateAbstract.js');
	const stateName     = require('./inputs/stateName.js');
	const stateParent   = require('./inputs/stateParent.js');
	const stateUrl      = require('./inputs/stateUrl.js');
	const validate      = require('./inputs/validate.js');

	const writingStateFile = require('./writing/stateFile.js');

	module.exports = class extends Generator {
		initializing() {
			logs.priority(this, 'initializing', true);

			moment.locale('en');

			config.updateWithCallback(this);

			const prompts = [
				{
					type   : 'confirm',
					name   : 'areYouReady',
					message: 'Are you ready to set up a new state for the ' + utils.getAppName(this) + ' app ?',
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

		inputFileName() {
			return fileName.set(this);
		}

		inputFilePath() {
			return filePath.set(this);
		}

		inputStateAbstract() {
			return stateAbstract.set(this);
		}

		inputStateName() {
			return stateName.set(this);
		}

		inputStateParent() {
			return stateParent.set(this);
		}

		inputStateUrl() {
			return stateUrl.set(this);
		}

		inputValidate() {
			return validate.set(this);
		}

		writing() {
			this.now     = moment();
			this.nowDate = this.now.format('DD/MM/YYYY');
			this.nowTime = this.now.format('HH:mm');
			this.log('Now :', chalk.hex(colors.get('cyan'))(this.nowDate, this.nowTime));

			writingStateFile(this);

			logs.priority(this, 'writing', true);
		}

		conflicts() {
			logs.priority(this, 'conflicts', false);
		}

		install() {
			logs.priority(this, 'install', true);
		}

		end() {
			logs.priority(this, 'end', false);
			this.log(chalk.hex(colors.get('green'))('Your state is ready ;)'));
		}
	};

})();
