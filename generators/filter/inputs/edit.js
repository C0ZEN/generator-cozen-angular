/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file edit on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 07/01/2018
 * Time: 18:35
 * Version: 0.12.4
 */
(function () {
	'use strict';

	const logs       = require('../../common/logs.js');
	const q          = require('q');
	const filterName = require('./filterName.js');
	const filterPath = require('./filterPath.js');
	const fileName   = require('./fileName.js');

	const longerGenerator = 13;
	const prompts         = [
		{
			type   : 'list',
			name   : 'edit',
			message: 'Choose a value to edit:',
			choices: [
				{
					value  : 'filterName',
					short  : 'filterName',
					checked: true
				},
				{
					value: 'fileName',
					short: 'fileName'
				},
				{
					value: 'filterPath',
					short: 'filterPath'
				}
			]
		}
	];

	const hints = [
		'Choose a value you want to edit.'
	];

	module.exports = class Edit {
		static set($that) {
			const deferred = q.defer();

			logs.hintsMultiline($that, hints);

			/* eslint no-magic-numbers:"off" */
			prompts[0].choices[0].name = logs.choice('Filter name', $that.filterName + 'Filter', longerGenerator);
			prompts[0].choices[1].name = logs.choice('File name', $that.fileName, longerGenerator);
			prompts[0].choices[2].name = logs.choice('File path', $that.filterPath, longerGenerator);

			$that.prompt(prompts).then($response => {
				onSuccess($response);
			});

			function onSuccess($response) {
				$that.edit = $response.edit;
				$that.config.set('edit', $that.edit);
				$that.log();

				switch ($response.edit) {
					case 'filterName':
						deferred.resolve(filterName.set($that, true));
						break;
					case 'fileName':
						deferred.resolve(fileName.set($that, true));
						break;
					case 'filterPath':
						deferred.resolve(filterPath.set($that, true));
						break;
					default:
						break;
				}
			}

			return deferred.promise;
		}
	};

})();