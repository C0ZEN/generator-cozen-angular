/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file validate on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/01/2018
 * Time: 22:28
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs  = require('../../common/logs.js');
	const path  = require('path');
	const slash = require('slash');
	const edit  = require('./edit.js');
	const q     = require('q');

	const prompts = [
		{
			type   : 'confirm',
			name   : 'validate',
			message: 'Confirm the creation:',
			default: true
		}
	];

	module.exports = class Validate {
		static set($that) {
			const deferred = q.defer();
			const hints    = [
				'Service name: ' + logs.value($that.serviceName + 'Service'),
				'File name: ' + logs.value($that.fileName),
				'File path: ' + logs.value($that.servicePath),
				'Complete path: ' + logs.value(slash(path.join($that.servicePath, $that.fileName + '.service.js')))
			];

			logs.hintsMultiline($that, hints);

			prompts[0].default = $that.serviceName;

			$that.prompt(prompts).then($response => {
				onSuccess($response);
			});

			function onSuccess($response) {
				$that.validate = $response.validate;
				$that.config.set('validate', $that.validate);
				$that.log();

				if (!$response.validate) {
					edit.set($that).then(() => {
						deferred.resolve(Validate.set($that));
					});
				}
				else {
					deferred.resolve($response.validate);
				}
			}

			return deferred.promise;
		}
	};

})();