/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file validate on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/02/2018
 * Time: 10:38
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');
	const edit = require('./edit.js');
	const q    = require('q');

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
				'Path: ' + logs.value($that.path),
				'File name: ' + logs.value($that.fileName),
				'Name: ' + logs.value($that.name),
				'Restrict: ' + logs.value($that.restrict),
				'Replace: ' + logs.value($that.replace),
				'Transclude: ' + logs.value($that.transclude),
				'Parent: ' + logs.value($that.parent)
			];

			logs.hintsMultiline($that, hints);

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