/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file fileName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/02/2018
 * Time: 10:38
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'fileName',
			message: 'Prefix of each generated files:'
		}
	];

	const hints = [
		'This is the prefix of each generated files.',
		'For example, if the name is "mySuperDirective", you could enter "mySuperDirective", then the generated controller will be "mySuperDirective.controller.js"',
		'Note that you could also reduce the file name length when there is a require property to gain more readability.',
		utils.namingConvention('0')
	];

	module.exports = class FileName {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.fileName : $that.rootDirectory;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.fileName = $response.fileName;
			$that.config.set('fileName', $that.fileName);
			$that.log();
		}
	};

})();