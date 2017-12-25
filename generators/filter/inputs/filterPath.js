/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file filterPath on WebStorm
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
			name   : 'filterPath',
			message: 'Path of the filter :',
			default: ''
		}
	];

	const hints = [
		'This will allow you to override the default path for the filter',
		'By default, it is: scripts/filters'
	];

	module.exports = class FilterPath {
		static set($that) {
			logs.hintHeader($that);
			logs.hintsMultiline($that, hints);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.filterPath = $response.filterPath;
			$that.config.set('filterPath', $that.filterPath);
			$that.log();
		}
	};

})();