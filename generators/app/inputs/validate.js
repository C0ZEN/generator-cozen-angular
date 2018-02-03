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
			logs.hint($that, 'App name: ' + logs.value($that.appName));
			logs.hint($that, 'App description: ' + logs.value($that.appDescription));
			logs.hint($that, 'AAL bower dependency: ' + logs.value($that.aalBowerDependency));
			if ($that.aalBowerDependency) {
				logs.hint($that, 'Theme: ' + logs.value($that.theme));
			}
			logs.hint($that, 'Lang: ' + logs.value($that.lang));
			logs.hint($that, 'Background color: ' + logs.value($that.backgroundColor));
			logs.hint($that, 'Theme color: ' + logs.value($that.themeColor));
			logs.hint($that, 'Author first name: ' + logs.value($that.authorFirstName));
			logs.hint($that, 'Author last name: ' + logs.value($that.authorLastName));
			logs.hint($that, 'Author email: ' + logs.value($that.authorEmail));
			logs.hint($that, 'Twitter name: ' + logs.value($that.twitterName));

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