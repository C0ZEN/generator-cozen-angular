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

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'filterName',
			message: 'Name of the filter :',
			default: 'filterName'
		}
	];

	const hints = [
		'The name of the filter should be write on camelCase.'
	];

	module.exports = class AppName {
		static set($that) {
			logs.hintHeader($that);
			logs.hintsMultiline($that, hints);

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