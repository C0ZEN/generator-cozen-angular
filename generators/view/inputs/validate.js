/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file validate on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 08/01/2018
 * Time: 10:53
 * Version: 0.12.3
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
				'Main directory: ' + logs.value($that.mainDirectory),
				'File names: ' + logs.value($that.fileNames),
				'View name: ' + logs.value($that.viewName),
				'View path: ' + logs.value($that.viewPath),
				'State name: ' + logs.value($that.stateName),
				'State url: ' + logs.value($that.stateUrl),
				'State abstract: ' + logs.value($that.stateAbstract),
				'State parent: ' + logs.value($that.stateParent),
				'Complete path: ' + logs.value(slash(path.join('app/views', $that.viewPath || '', $that.mainDirectory, $that.fileNames + '.*')))
			];

			logs.hintsMultiline($that, hints);

			prompts[0].default = $that.serviceName;

			$that.prompt(prompts).then($response => {
				Validate.onSuccess($that, $response, deferred);
			});

			return deferred.promise;
		}

		static onSuccess($that, $response, $deferred) {
			$that.validate = $response.validate;
			$that.config.set('validate', $that.validate);
			$that.log();

			if (!$response.validate) {
				edit.set($that).then(() => {
					$deferred.resolve(Validate.set($that));
				});
			}
			else {
				$deferred.resolve($response.validate);
			}
		}
	};

})();