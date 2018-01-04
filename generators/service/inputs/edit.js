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

	const logs        = require('../../common/logs.js');
	const q           = require('q');
	const serviceName = require('./serviceName.js');
	const servicePath = require('./servicePath.js');
	const fileName    = require('./fileName.js');
	const validate    = require('./validate.js');

	const prompts = [
		{
			type   : 'list',
			name   : 'edit',
			message: 'Choose a value to edit:',
			choices: [
				{
					name   : 'Service name',
					value  : 'serviceName',
					short  : 'serviceName',
					checked: true
				},
				{
					name : 'File name',
					value: 'fileName',
					short: 'fileName'
				},
				{
					name : 'File path',
					value: 'servicePath',
					short: 'servicePath'
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

			$that.prompt(prompts).then($response => {
				onSuccess($response);
			});

			function onSuccess($response) {
				$that.edit = $response.edit;
				$that.config.set('edit', $that.edit);
				$that.log();

				switch ($response.edit) {
					case 'serviceName':
						deferred.resolve(serviceName.set($that, true));
						break;
					case 'fileName':
						deferred.resolve(fileName.set($that, true));
						break;
					case 'servicePath':
						deferred.resolve(servicePath.set($that, true));
						break;
					default:
						break;
				}
			}

			return deferred.promise;
		}
	};

})();