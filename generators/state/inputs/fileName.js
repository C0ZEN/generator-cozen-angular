/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file fileName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 17/01/2018
 * Time: 10:09
 * Version: 0.12.18
 */
(function () {
	'use strict';

	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'fileName',
			message: 'Name of file:'
		}
	];

	const hints = [
		'This is the name of the file - only the prefix -.',
		'We will automatically add the type and the extension as <fileName>.<type>.<extension>.',
		'Example: myFileName.state.js.',
		utils.namingConvention('0')
	];

	module.exports = class FileName {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.fileName : 'main';

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