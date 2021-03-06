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
	const _             = require('lodash');
	const colors        = require('./colors.js');

	module.exports = class Logs {
		static priority($that, $priority, $spaceBefore) {
			if ($spaceBefore) {
				$that.log('');
			}
			$that.log(chalk.hex(colors.get('orange')).bold('>>> %s <<<\n'), upperCase($priority));
		}

		static hint($that, $text, $newLine) {
			const newLine = _.isUndefined($newLine) ? true : $newLine;
			let text      = $text;
			if (newLine) {
				text += '\n';
			}
			$that.log(chalk.hex(colors.get('purple'))(text));
		}

		static hints($that, $texts) {
			for (let i = 0, length = $texts.length; i < length; i++) {
				this.hint($that, $texts[i]);
			}
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

		static arrow() {
			return chalk.hex(colors.get('orange'))(' >>> ');
		}

		static choiceHint($text) {
			return this.arrow() + chalk.hex(colors.get('purple'))($text);
		}

		static choice($option, $text, $longerGenerator) {
			return this.addWhitespaces($option, $longerGenerator) + this.choiceHint($text);
		}

		static addWhitespaces($text, $maxLength) {
			const textLength = $text.length;
			let text         = $text;
			for (let i = 0; i < $maxLength - textLength; i++) {
				text += ' ';
			}
			return text;
		}

		static value($text) {
			return chalk.hex(colors.get('orange'))($text);
		}
	};

})();