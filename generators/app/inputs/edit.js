/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file edit on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 18/01/2018
 * Time: 15:54
 * Version: 0.13.1
 */
(function () {
	'use strict';

	const logs           = require('../../common/logs.js');
	const q              = require('q');
	const aal            = require('./aal.js');
	const appDescription = require('./appDescription.js');
	const appName        = require('./appName.js');
	const author         = require('./author.js');
	const authorEmail    = require('./authorEmail.js');
	const color          = require('./color.js');
	const lang           = require('./lang.js');
	const theme          = require('./theme.js');

	const longerGenerator = 20;
	const prompts         = [
		{
			type   : 'list',
			name   : 'edit',
			message: 'Choose a value to edit:',
			choices: [
				{
					value  : 'appName',
					short  : 'appName',
					checked: true
				},
				{
					value: 'appDescription',
					short: 'appDescription'
				},
				{
					value: 'theme',
					short: 'theme'
				},
				{
					value: 'lang',
					short: 'lang'
				},
				{
					value: 'backgroundColor',
					short: 'backgroundColor'
				},
				{
					value: 'themeColor',
					short: 'themeColor'
				},
				{
					value: 'authorFirstName',
					short: 'authorFirstName'
				},
				{
					value: 'authorLastName',
					short: 'authorLastName'
				},
				{
					value: 'authorEmail',
					short: 'authorEmail'
				},
				{
					value: 'aalBowerDependency',
					short: 'aalBowerDependency'
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
			prompts[0].choices[0].name = logs.choice('App name', $that.appName, longerGenerator);
			prompts[0].choices[1].name = logs.choice('App description', $that.appDescription, longerGenerator);
			prompts[0].choices[2].name = logs.choice('Theme', $that.theme, longerGenerator);
			prompts[0].choices[3].name = logs.choice('Lang', $that.lang, longerGenerator);
			prompts[0].choices[4].name = logs.choice('Background color', $that.backgroundColor, longerGenerator);
			prompts[0].choices[5].name = logs.choice('Theme color', $that.themeColor, longerGenerator);
			prompts[0].choices[6].name = logs.choice('Author first name', $that.authorFirstName, longerGenerator);
			prompts[0].choices[7].name = logs.choice('Author last name', $that.authorLastName, longerGenerator);
			prompts[0].choices[8].name = logs.choice('Author email', $that.authorEmail, longerGenerator);
			prompts[0].choices[9].name = logs.choice('AAL bower dependency', $that.aal, longerGenerator);

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
				case 'appName':
					$deferred.resolve(appName.set($that, true));
					break;
				case 'appDescription':
					$deferred.resolve(appDescription.set($that, true));
					break;
				case 'theme':
					$deferred.resolve(theme.set($that, true));
					break;
				case 'lang':
					$deferred.resolve(lang.set($that, true));
					break;
				case 'backgroundColor':
				case 'themeColor':
					$deferred.resolve(color.set($that, true));
					break;
				case 'authorFirstName':
				case 'authorLastName':
					$deferred.resolve(author.set($that, true));
					break;
				case 'authorEmail':
					$deferred.resolve(authorEmail.set($that, true));
					break;
				case 'aal':
					$deferred.resolve(aal.set($that, true));
					break;
				default:
					break;
			}
		}
	};

})();