/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file filterName on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 20/12/2017
 * Time: 19:56
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'filterName',
			message: 'Name of the filter:'
		}
	];

	const hints = [
		'The name of the filter.',
		utils.namingConvention('0')
	];

	module.exports = class FilterName {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.filterName : 'filterName';

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.filterName = $response.filterName;
			$that.config.set('filterName', $that.filterName);
			$that.log();
		}
	};

})();