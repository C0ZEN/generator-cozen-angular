/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file edit on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 17/01/2018
 * Time: 09:52
 * Version: 0.12.18
 */
(function () {
	'use strict';

	const logs          = require('../../common/logs.js');
	const q             = require('q');
	const fileName      = require('./fileName.js');
	const filePath      = require('./filePath.js');
	const stateAbstract = require('./stateAbstract.js');
	const stateName     = require('./stateName.js');
	const stateParent   = require('./stateParent.js');
	const stateUrl      = require('./stateUrl.js');

	const longerGenerator = 14;
	const prompts         = [
		{
			type   : 'list',
			name   : 'edit',
			message: 'Choose a value to edit:',
			choices: [
				{
					value  : 'fileName',
					short  : 'fileName',
					checked: true
				},
				{
					value: 'filePath',
					short: 'filePath'
				},
				{
					value: 'stateAbstract',
					short: 'stateAbstract'
				},
				{
					value: 'stateName',
					short: 'stateName'
				},
				{
					value: 'stateParent',
					short: 'stateParent'
				},
				{
					value: 'stateUrl',
					short: 'stateUrl'
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
			prompts[0].choices[0].name = logs.choice('File name', $that.fileName, longerGenerator);
			prompts[0].choices[1].name = logs.choice('File path', $that.filePath, longerGenerator);
			prompts[0].choices[2].name = logs.choice('Abstract state', $that.stateAbstract, longerGenerator);
			prompts[0].choices[3].name = logs.choice('State name', $that.stateName, longerGenerator);
			prompts[0].choices[4].name = logs.choice('Parent state', $that.stateParent, longerGenerator);
			prompts[0].choices[5].name = logs.choice('State url', $that.stateParent, longerGenerator);

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
				case 'fileName':
					$deferred.resolve(fileName.set($that, true));
					break;
				case 'filePath':
					$deferred.resolve(filePath.set($that, true));
					break;
				case 'stateAbstract':
					$deferred.resolve(stateAbstract.set($that, true));
					break;
				case 'stateName':
					$deferred.resolve(stateName.set($that, true));
					break;
				case 'stateParent':
					$deferred.resolve(stateParent.set($that, true));
					break;
				case 'stateUrl':
					$deferred.resolve(stateUrl.set($that, true));
					break;
				default:
					break;
			}
		}
	};

})();