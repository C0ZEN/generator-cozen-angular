/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file logs on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 16/12/2017
 * Time: 12:17
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const chalkInstance = require('chalk');
	const chalk         = new chalkInstance.constructor({
		level  : 3,
		enabled: true
	});
	const upperCase     = require('upper-case');
	const colors        = require('./colors.js');

	module.exports = class Logs {
		static priority($that, $priority, $spaceBefore) {
			if ($spaceBefore) {
				$that.log('');
			}
			$that.log(chalk.hex(colors.get('orange')).bold('>>> %s <<<\n'), upperCase($priority));
		}

		static hint($that, $text) {
			$that.log(chalk.hex(colors.get('purple'))($text + '\n'));
		}

		static hints($that, $texts) {
			for (let i = 0, length = $texts.length; i < length; i++) {
				this.hint($that, $texts[i]);
			}
		}

		static hintHeader($that) {
			$that.log(chalk.hex(colors.get('purple')).bold('Hint:\n'));
		}

		static hintsMultiline($that, $texts) {
			let text = '';
			for (let i = 0, length = $texts.length; i < length; i++) {
				text += $texts[i];
				if (i + 1 < length) {
					text += '\n';
				}
			}
			this.hint($that, text);
		}
	};

})();