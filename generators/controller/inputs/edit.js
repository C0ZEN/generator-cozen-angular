/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file edit on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 07/01/2018
 * Time: 19:08
 * Version: 0.12.5
 */
(function () {
	'use strict';

	const logs         = require('../../common/logs.js');
	const q            = require('q');
	const controllerName = require('./controllerName.js');
	const controllerPath = require('./controllerPath.js');
	const fileName     = require('./fileName.js');

	const longerGenerator = 15;
	const prompts         = [
		{
			type   : 'list',
			name   : 'edit',
			message: 'Choose a value to edit:',
			choices: [
				{
					value  : 'controllerName',
					short  : 'controllerName',
					checked: true
				},
				{
					value: 'fileName',
					short: 'fileName'
				},
				{
					value: 'controllerPath',
					short: 'controllerPath'
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
			prompts[0].choices[0].name = logs.choice('Controller name', $that.controllerName + 'Controller', longerGenerator);
			prompts[0].choices[1].name = logs.choice('File name', $that.fileName, longerGenerator);
			prompts[0].choices[2].name = logs.choice('File path', $that.controllerPath, longerGenerator);

			$that.prompt(prompts).then($response => {
				onSuccess($response);
			});

			function onSuccess($response) {
				$that.edit = $response.edit;
				$that.config.set('edit', $that.edit);
				$that.log();

				switch ($response.edit) {
					case 'controllerName':
						deferred.resolve(controllerName.set($that, true));
						break;
					case 'fileName':
						deferred.resolve(fileName.set($that, true));
						break;
					case 'controllerPath':
						deferred.resolve(controllerPath.set($that, true));
						break;
					default:
						break;
				}
			}

			return deferred.promise;
		}
	};

})();