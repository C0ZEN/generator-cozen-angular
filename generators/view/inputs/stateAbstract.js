/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file stateAbstract on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 20:28
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const logs = require('../../common/logs.js');

	const prompts = [
		{
			type   : 'confirm',
			name   : 'stateAbstract',
			message: 'Is this an abstract state:'
		}
	];

	const hints = [
		'An abstract state is a none accessible state.',
		'Use it only as a parent of a state.'
	];

	module.exports = class StateAbstract {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.stateAbstract : false;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.stateAbstract = $response.stateAbstract;
			$that.config.set('stateAbstract', $that.stateAbstract);
			$that.log();
		}
	};

})();