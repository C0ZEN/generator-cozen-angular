/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file parent on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 04/02/2018
 * Time: 10:42
 * Version: 0.15.3
 */
(function () {
	'use strict';

	const logs  = require('../../common/logs.js');
	const utils = require('../../common/utils.js');

	const prompts = [
		{
			type   : 'input',
			name   : 'parent',
			message: 'Does the directive have a parent (require) ? If no, let the field empty:'
		}
	];

	const hints = [
		'If the directive have a parent, enter his name.',
		'This input will set a property "require".',
		'For example, if the directive is "input" and have a parent directive "form", enter the Angular name of the form, like "form".',
		utils.namingConvention('0')
	];

	module.exports = class Parent {
		static set($that, $defaultFromMemory) {
			logs.hintsMultiline($that, hints);

			prompts[0].default = $defaultFromMemory ? $that.parent : null;

			return $that.prompt(prompts).then($response => {
				this.onSuccess($that, $response);
			});
		}

		static onSuccess($that, $response) {
			$that.parent = $response.parent;
			$that.config.set('parent', $that.parent);
			$that.log();
		}
	};

})();