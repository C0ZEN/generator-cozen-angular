/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file validate on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/01/2018
 * Time: 17:27
 * Version: 0.13.1
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
				'App name: ' + logs.value($that.appName),
				'App description: ' + logs.value($that.appDescription),
				'Theme: ' + logs.value($that.theme),
				'Lang: ' + logs.value($that.lang),
				'Background color: ' + logs.value($that.backgroundColor),
				'Theme color: ' + logs.value($that.themeColor),
				'Author first name: ' + logs.value($that.authorFirstName),
				'Author last name: ' + logs.value($that.authorLastName),
				'Author email: ' + logs.value($that.authorEmail),
				'AAL bower dependency: ' + logs.value($that.aalBowerDependency),
				'Twitter name: ' + logs.value($that.twitterName)
			];

			logs.hintsMultiline($that, hints);

			prompts[0].default = $that.filterName;

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