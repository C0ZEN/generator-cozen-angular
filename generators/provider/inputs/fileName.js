/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file fileName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 28/12/2017
 * Time: 19:07
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'fileName',
			message: 'Name of file :'
		}
	];

	const hints = [
		'This is the name of the file - only the prefix - in camelCase.',
		'We will automatically add the type and the extension as <fileName>.<type>.<extension>',
		'Example: myFileName.provider.js'
	];

	module.exports = class FileName {
		static set($that) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $that.providerName;

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