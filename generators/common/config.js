/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file config on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 21/12/2017
 * Time: 10:37
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const path = require('path');
	const _    = require('lodash');

	const callbackConfigKeys = [
		'appName',
		'appNameCamel',
		'appNameKebab',
		'appNameUpperPython'
	];

	module.exports = class Config {
		static updateWithCallback($that) {
			_.forEach(callbackConfigKeys, $key => {
				$that.config.set($key, $that.config.get($key) || this.getCallbackProperty($that, $key));
			});
		}

		static getCallbackProperty($that, $key) {
			let property = '';
			const file   = $that.fs.readJSON(path.join(process.cwd(), 'package.json'));
			/* istanbul ignore if */
			if (file && _.isObject(file.yoCallbackConfig) && $key in file.yoCallbackConfig) {
				property = file.yoCallbackConfig[$key];
			}
			return property;
		}
	};

})();