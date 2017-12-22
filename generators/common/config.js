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

			const packageFile = this.getPackage($that);

			/* istanbul ignore if */
			if (packageFile) {
				$that.currentVersion = packageFile.version || '0.0.0';
			}
		}

		static getCallbackProperty($that, $key) {
			let property      = '';
			const packageFile = this.getPackage($that);

			/* istanbul ignore if */
			if (packageFile && _.isObject(packageFile.yoCallbackConfig) && $key in packageFile.yoCallbackConfig) {
				property = packageFile.yoCallbackConfig[$key];
			}
			return property;
		}

		static getPackagePath() {
			return path.join(process.cwd(), 'package.json');
		}

		static getPackage($that) {
			const packagePath = this.getPackagePath();

			/* istanbul ignore if */
			if ($that.fs.exists(packagePath)) {
				return $that.fs.readJSON(packagePath);
			}
			return null;
		}

		/* istanbul ignore next */
		static updatePackage($that, $data) {
			$that.fs.writeJSON(this.getPackagePath(), $data);
		}
	};

})();