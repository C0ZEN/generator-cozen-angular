/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file index on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/02/2018
 * Time: 10:33
 * Version: 0.15.3
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

	const isThisYou   = require('../common/inputs/isThisYou.js');
	const author      = require('../common/inputs/author.js');
	const authorEmail = require('../common/inputs/authorEmail.js');
	const path        = require('./inputs/path.js');
	const fileName    = require('./inputs/fileName.js');
	const name        = require('./inputs/name.js');
	const restrict    = require('./inputs/restrict.js');
	const replace     = require('./inputs/replace.js');
	const transclude  = require('./inputs/transclude.js');
	const parent      = require('./inputs/parent.js');
	const validate    = require('./inputs/validate.js');

	const writingFiles         = require('./writing/files.js');
	const writingLanguageFiles = require('./writing/languagesFiles.js');
	const writingStylesFiles   = require('./writing/stylesFiles.js');

	module.exports = class extends Generator {
		initializing() {
			logs.priority(this, 'initializing', true);

			moment.locale('en');

			config.updateWithCallback(this);

			const prompts = [
				{
					type   : 'confirm',
					name   : 'areYouReady',
					message: 'Are you ready to set up a new directive for the ' + utils.getAppName(this) + ' app ?',
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

		inputPath() {
			return path.set(this);
		}

		inputFileName() {
			return fileName.set(this);
		}

		inputName() {
			return name.set(this);
		}

		inputRestrict() {
			return restrict.set(this);
		}

		inputReplace() {
			return replace.set(this);
		}

		inputTransclude() {
			return transclude.set(this);
		}

		inputParent() {
			return parent.set(this);
		}

		inputValidate() {
			return validate.set(this);
		}

		writing() {
			this.now     = moment();
			this.nowDate = this.now.format('DD/MM/YYYY');
			this.nowTime = this.now.format('HH:mm');
			this.log('Now :', chalk.hex(colors.get('cyan'))(this.nowDate, this.nowTime));

			writingFiles(this);
			writingLanguageFiles(this);
			writingStylesFiles(this);

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
			this.log(chalk.hex(colors.get('green'))('Your directive is ready ;)'));
		}
	};

})();
