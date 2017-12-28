/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file index on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/12/2017
 * Time: 11:40
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

	const isThisYou   = require('../common/inputs/isThisYou.js');
	const author      = require('../common/inputs/author.js');
	const authorEmail = require('../common/inputs/authorEmail.js');
	const serviceName = require('./inputs/serviceName.js');
	const servicePath = require('./inputs/servicePath.js');
	const fileName    = require('./inputs/fileName.js');

	const writingServiceFile = require('./writing/serviceFile.js');

	module.exports = class extends Generator {
		initializing() {
			logs.priority(this, 'initializing', true);

			moment.locale('en');

			config.updateWithCallback(this);

			const prompts = [
				{
					type   : 'confirm',
					name   : 'areYouReady',
					message: 'Are you ready to set up a new service for the ' + this.config.get('appName') + ' app ?',
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

		inputServiceName() {
			return serviceName.set(this);
		}

		inputServicePath() {
			return servicePath.set(this);
		}

		inputFileName() {
			return fileName.set(this);
		}

		writing() {
			this.now     = moment();
			this.nowDate = this.now.format('DD/MM/YYYY');
			this.nowTime = this.now.format('HH:mm');
			this.log('Now :', chalk.hex(colors.get('cyan'))(this.nowDate, this.nowTime));

			writingServiceFile(this);

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
			this.log(chalk.hex(colors.get('green'))('Your service is ready ;)'));
		}
	};

})();
