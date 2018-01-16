/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file utils on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 10:01
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const chalkInstance = require('chalk');
	const chalk         = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const colors        = require('./colors.js');
	const path          = require('path');
	const mkdirp        = require('mkdirp');
	const _             = require('lodash');
	const npm           = require('../app/dependencies/npm.js');
	const bower         = require('../app/dependencies/bower.js');

	module.exports = class Utils {
		static copyFile($that, $path) {
			$that.fs.copy($that.templatePath($path), $that.destinationPath($path));
		}

		static copyFileTpl($that, $path, $data, $dest) {
			$that.fs.copyTpl($that.templatePath($path), $dest || $path, $data);
		}

		static copyFileTplFrom($that, $path, $data, $dest) {
			$that.fs.copyTpl(path.join(__dirname, 'templates', $path), $dest || $path, $data);
		}

		static copyFileTplWithMultipleDestinations($that, $path, $data, $destinations) {
			_.forEach($destinations, $destination => {
				$that.fs.copyTpl(
					$that.templatePath($path),
					$that.destinationPath($destination),
					$data
				);
			});
		}

		static newDirectory($paths) {
			_.forEach($paths, $path => {
				mkdirp.sync($path);
			});
		}

		static installNpmPackages($that) {
			$that.npmInstall(npm.getModules(), {
				'save-dev': true
			});
		}

		static installBowerPackages($that) {
			$that.bowerInstall(bower.getModules(), {
				save: true
			});
		}

		static getViewsPath($that, $shorter, $noAppPrefix) {
			const prefix = $noAppPrefix ? '' : 'app';
			if ($shorter) {
				return path.join(prefix, 'views', $that.viewPath || '', $that.mainDirectory);
			}
			return path.join(prefix, 'views', $that.viewPath || '', $that.mainDirectory, $that.fileNames);
		}

		static namingConvention($convention) {
			return 'Naming convention: ' + chalk.hex(colors.get('orange'))(this.namingConventionAlias($convention));
		}

		static namingConventionAlias($alias) {
			const alias = $alias.toString();

			/* istanbul ignore next */
			switch (alias) {
				case '0':
					return 'camelCase';
				case '1':
					return 'kebab-case';
				case '2':
					return 'PascalCase';
				case '3':
					return 'snake_case';
				case '4':
					return 'SNAKE_CASE';
				case '5':
					return 'camelCase.with.optional.dots';
				case '6':
					return 'Classic text';
				default:
					return alias;
			}
		}

		static getAppName($that) {
			return chalk.hex(colors.get('orange'))($that.config.get('appName'));
		}
	};

})();