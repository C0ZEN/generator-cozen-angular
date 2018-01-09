/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file fileNames on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 09/01/2018
 * Time: 11:27
 * Version: 0.12.11
 */
(function () {
	'use strict';

	const logs          = require('../../common/logs.js');
	const utils         = require('../../common/utils.js');
	const camelCase     = require('camelcase');
	const chalkInstance = require('chalk');
	const chalk         = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const colors        = require('../../common/colors.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'fileNames',
			message: 'Name of the files:'
		}
	];

	const hints = [
		'This is the name of the files - only the prefix -.',
		'We will automatically add the type and the extension as <fileName>.<type>.<extension>.',
		'Example: myFileName.provider.js.',
		utils.namingConvention('5')
	];

	module.exports = class FileNames {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.fileNames : $that.mainDirectory;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.fileNames = $response.fileNames;
			$that.config.set('fileNames', $that.fileNames);

			$that.fileNamesCamel = camelCase($response.fileNames);
			$that.config.set('fileNamesCamel', $that.fileNamesCamel);
			$that.log(
				'The file names in camelCase is:',
				chalk.hex(colors.get('cyan'))($that.fileNamesCamel)
			);

			$that.fileNamesDotted = $that.fileNamesCamel.replace(/-/g, '.');
			$that.config.set('fileNamesDotted', $that.fileNamesDotted);
			$that.log(
				'The file names in camelCase.dotted is:',
				chalk.hex(colors.get('cyan'))($that.fileNamesDotted)
			);

			$that.log();
		}
	};

})();