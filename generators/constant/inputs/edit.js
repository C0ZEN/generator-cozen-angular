/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file edit on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 08/01/2018
 * Time: 00:09
 * Version: 0.12.6
 */
(function () {
	'use strict';

	const logs         = require('../../common/logs.js');
	const q            = require('q');
	const constantName = require('./constantName.js');
	const constantPath = require('./constantPath.js');
	const fileName     = require('./fileName.js');

	const longerGenerator = 13;
	const prompts         = [
		{
			type   : 'list',
			name   : 'edit',
			message: 'Choose a value to edit:',
			choices: [
				{
					value  : 'constantName',
					short  : 'constantName',
					checked: true
				},
				{
					value: 'fileName',
					short: 'fileName'
				},
				{
					value: 'constantPath',
					short: 'constantPath'
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
			prompts[0].choices[0].name = logs.choice('Constant name', $that.constantName + 'Constant', longerGenerator);
			prompts[0].choices[1].name = logs.choice('File name', $that.fileName, longerGenerator);
			prompts[0].choices[2].name = logs.choice('File path', $that.constantPath, longerGenerator);

			$that.prompt(prompts).then($response => {
				Edit.onSuccess($that, $response, deferred);
			});

			return deferred.promise;
		}

		static onSuccess($that, $response, $deferred) {
			$that.edit = $response.edit;
			$that.config.set('edit', $that.edit);
			$that.log();

			switch ($response.edit) {
				case 'constantName':
					$deferred.resolve(constantName.set($that, true));
					break;
				case 'fileName':
					$deferred.resolve(fileName.set($that, true));
					break;
				case 'constantPath':
					$deferred.resolve(constantPath.set($that, true));
					break;
				default:
					break;
			}
		}
	};

})();