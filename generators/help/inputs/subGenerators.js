/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file subGenerators on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 28/12/2017
 * Time: 21:42
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs            = require('../../common/logs.js');
	const longerGenerator = 10;

	const prompts = [
		{
			type   : 'list',
			name   : 'subGenerators',
			message: 'Select a sub-generator:',
			choices: [
				{
					name   : logs.choice('app', 'create a new project', longerGenerator),
					value  : 'app',
					short  : 'app',
					checked: true
				},
				{
					name : logs.choice('config', 'update or create the configuration file for the whole project', longerGenerator),
					value: 'config',
					short: 'config'
				},
				{
					name : logs.choice('constant', 'create an angular constant', longerGenerator),
					value: 'constant',
					short: 'constant'
				},
				{
					name : logs.choice('controller', 'create an angular controller', longerGenerator),
					value: 'controller',
					short: 'controller'
				},
				{
					name : logs.choice('filter', 'create an angular filter', longerGenerator),
					value: 'filter',
					short: 'filter'
				},
				{
					name : logs.choice('provider', 'create an angular provider', longerGenerator),
					value: 'provider',
					short: 'provider'
				},
				{
					name : logs.choice('service', 'create an angular service', longerGenerator),
					value: 'service',
					short: 'service'
				},
				{
					name : logs.choice('view', 'create a view', longerGenerator),
					value: 'view',
					short: 'view'
				}
			]
		}
	];

	const hints = [
		'Checkout the list of sub-generators and select one to proceed.'
	];

	module.exports = class SubGenerators {
		static set($that) {

			$that.log();
			logs.hintsMultiline($that, hints);

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.subGenerators = $response.subGenerators;
			$that.config.set('subGenerators', $that.subGenerators);
			$that.log();

			$that.composeWith('cozen-angular:' + $response.subGenerators);
		}
	};

})();