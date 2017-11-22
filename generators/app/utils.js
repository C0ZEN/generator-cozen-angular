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

	const mkdirp = require('mkdirp');
	const _      = require('lodash');
	const npm    = require('./dependencies/npm.js');
	const bower  = require('./dependencies/bower.js');

	module.exports = class Utils {
		static copyFile($that, $path) {
			$that.fs.copy($that.templatePath($path), $that.destinationPath($path));
		}

		static copyFileTpl($that, $path, $data, $dest) {
			let dest = $dest;
			if (_.isUndefined($dest)) {
				dest = $path;
			}
			$that.fs.copyTpl($that.templatePath($path), $that.destinationPath(dest), $data);
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
				'save-dev': false
			});
		}
	};

})();