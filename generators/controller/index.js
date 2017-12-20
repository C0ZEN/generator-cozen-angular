/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file index on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/12/2017
 * Time: 17:11
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
	const utils  = require('../common/utils.js');

	const isThisYou      = require('../common/inputs/isThisYou.js');
	const author         = require('../common/inputs/author.js');
	const authorEmail    = require('../common/inputs/authorEmail.js');
	const controllerName = require('./inputs/controllerName.js');
	const controllerPath = require('./inputs/controllerPath.js');

	const writingControllerFile = require('./writing/controllerFile.js');

	module.exports = class extends Generator {
		initializing() {
			logs.priority(this, 'initializing', true);

			moment.locale('en');

			utils.updateConfigWithCallbackConfig(this);

			const prompts = [
				{
					type   : 'confirm',
					name   : 'areYouReady',
					message: 'Are you ready to set up a new controller for the ' + this.config.get('appName') + ' app ?',
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

		inputControllerName() {
			return controllerName.set(this);
		}

		inputControllerPath() {
			return controllerPath.set(this);
		}

		writing() {
			this.now     = moment();
			this.nowDate = this.now.format('DD/MM/YYYY');
			this.nowTime = this.now.format('HH:mm');
			this.log('Now :', chalk.hex(colors.get('cyan'))(this.nowDate, this.nowTime));

			writingControllerFile(this);

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
			this.log(chalk.hex(colors.get('green'))('Your controller is ready ;)'));
		}
	};

})();
