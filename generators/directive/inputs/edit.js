/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file edit on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/02/2018
 * Time: 10:39
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const logs       = require('../../common/logs.js');
	const q          = require('q');
	const path       = require('./path.js');
	const fileName   = require('./fileName.js');
	const name       = require('./name.js');
	const restrict   = require('./restrict.js');
	const replace    = require('./replace.js');
	const transclude = require('./transclude.js');
	const parent     = require('./parent.js');

	const longerGenerator = 10;
	const prompts         = [
		{
			type   : 'list',
			name   : 'edit',
			message: 'Choose a value to edit:',
			choices: [
				{
					value  : 'path',
					short  : 'path',
					checked: true
				},
				{
					value: 'fileName',
					short: 'fileName'
				},
				{
					value: 'name',
					short: 'name'
				},
				{
					value: 'restrict',
					short: 'restrict'
				},
				{
					value: 'replace',
					short: 'replace'
				},
				{
					value: 'transclude',
					short: 'transclude'
				},
				{
					value: 'parent',
					short: 'parent'
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
			prompts[0].choices[0].name = logs.choice('Path', $that.path, longerGenerator);
			prompts[0].choices[1].name = logs.choice('File name', $that.fileName, longerGenerator);
			prompts[0].choices[2].name = logs.choice('Name', $that.name, longerGenerator);
			prompts[0].choices[3].name = logs.choice('Restrict', $that.restrict, longerGenerator);
			prompts[0].choices[4].name = logs.choice('Replace', $that.replace, longerGenerator);
			prompts[0].choices[5].name = logs.choice('Transclude', $that.transclude, longerGenerator);
			prompts[0].choices[6].name = logs.choice('Parent', $that.parent, longerGenerator);

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
				case 'path':
					$deferred.resolve(path.set($that, true));
					break;
				case 'fileName':
					$deferred.resolve(fileName.set($that, true));
					break;
				case 'name':
					$deferred.resolve(name.set($that, true));
					break;
				case 'restrict':
					$deferred.resolve(restrict.set($that, true));
					break;
				case 'replace':
					$deferred.resolve(replace.set($that, true));
					break;
				case 'transclude':
					$deferred.resolve(transclude.set($that, true));
					break;
				case 'parent':
					$deferred.resolve(parent.set($that, true));
					break;
				default:
					break;
			}
		}
	};

})();