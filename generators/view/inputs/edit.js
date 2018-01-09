/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file edit on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 08/01/2018
 * Time: 10:52
 * Version: 0.12.3
 */
(function () {
	'use strict';

	const logs          = require('../../common/logs.js');
	const q             = require('q');
	const mainDirectory = require('./mainDirectory.js');
	const fileNames     = require('./fileNames.js');
	const viewName      = require('./viewName.js');
	const viewPath      = require('./viewPath.js');
	const stateName     = require('./stateName.js');
	const stateUrl      = require('./stateUrl.js');
	const stateAbstract = require('./stateAbstract.js');
	const stateParent   = require('./stateParent.js');

	const longerGenerator = 14;
	const prompts         = [
		{
			type   : 'list',
			name   : 'edit',
			message: 'Choose a value to edit:',
			choices: [
				{
					value  : 'mainDirectory',
					short  : 'mainDirectory',
					checked: true
				},
				{
					value: 'fileNames',
					short: 'fileNames'
				},
				{
					value: 'viewName',
					short: 'viewName'
				},
				{
					value: 'viewPath',
					short: 'viewPath'
				},
				{
					value: 'stateName',
					short: 'stateName'
				},
				{
					value: 'stateUrl',
					short: 'stateUrl'
				},
				{
					value: 'stateAbstract',
					short: 'stateAbstract'
				},
				{
					value: 'stateParent',
					short: 'stateParent'
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
			prompts[0].choices[0].name = logs.choice('Main directory', $that.mainDirectory, longerGenerator);
			prompts[0].choices[1].name = logs.choice('File names', $that.fileNames, longerGenerator);
			prompts[0].choices[2].name = logs.choice('View name', $that.viewName, longerGenerator);
			prompts[0].choices[3].name = logs.choice('View path', $that.viewPath, longerGenerator);
			prompts[0].choices[4].name = logs.choice('State name', $that.stateName, longerGenerator);
			prompts[0].choices[5].name = logs.choice('State url', $that.stateUrl, longerGenerator);
			prompts[0].choices[6].name = logs.choice('State abstract', $that.stateAbstract, longerGenerator);
			prompts[0].choices[7].name = logs.choice('State parent', $that.stateParent, longerGenerator);

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
				case 'mainDirectory':
					$deferred.resolve(mainDirectory.set($that, true));
					break;
				case 'fileNames':
					$deferred.resolve(fileNames.set($that, true));
					break;
				case 'viewName':
					$deferred.resolve(viewName.set($that, true));
					break;
				case 'viewPath':
					$deferred.resolve(viewPath.set($that, true));
					break;
				case 'stateName':
					$deferred.resolve(stateName.set($that, true));
					break;
				case 'stateUrl':
					$deferred.resolve(stateUrl.set($that, true));
					break;
				case 'stateAbstract':
					$deferred.resolve(stateAbstract.set($that, true));
					break;
				case 'stateParent':
					$deferred.resolve(stateParent.set($that, true));
					break;
				default:
					break;
			}
		}
	};

})();