/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file edit on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/01/2018
 * Time: 22:39
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs               = require('../../common/logs.js');
	const q                  = require('q');
	const serviceName        = require('./serviceName.js');
	const servicePath        = require('./servicePath.js');
	const fileName           = require('./fileName.js');
	const subscribeAndNotify = require('./subscribeAndNotify.js');

	const longerGenerator = 20;
	const prompts         = [
		{
			type   : 'list',
			name   : 'edit',
			message: 'Choose a value to edit:',
			choices: [
				{
					value  : 'serviceName',
					short  : 'serviceName',
					checked: true
				},
				{
					value: 'fileName',
					short: 'fileName'
				},
				{
					value: 'servicePath',
					short: 'servicePath'
				},
				{
					value: 'subscribeAndNotify',
					short: 'subscribeAndNotify'
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
			prompts[0].choices[0].name = logs.choice('Service name', $that.serviceName + 'Service', longerGenerator);
			prompts[0].choices[1].name = logs.choice('File name', $that.fileName, longerGenerator);
			prompts[0].choices[2].name = logs.choice('File path', $that.servicePath, longerGenerator);
			prompts[0].choices[3].name = logs.choice('Subscribe and notify', $that.subscribeAndNotify, longerGenerator);

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
				case 'serviceName':
					$deferred.resolve(serviceName.set($that, true));
					break;
				case 'fileName':
					$deferred.resolve(fileName.set($that, true));
					break;
				case 'servicePath':
					$deferred.resolve(servicePath.set($that, true));
					break;
				case 'subscribeAndNotify':
					$deferred.resolve(subscribeAndNotify.set($that, true));
					break;
				default:
					break;
			}
		}
	};

})();