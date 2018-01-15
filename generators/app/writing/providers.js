/**
 * Generated header by C0ZEN for generator-cozen-angular project
 * Generated file providers on WebStorm
 *
 * Created by: Geoffrey "C0ZEN" Testelin
 * Date: 19/11/2017
 * Time: 10:49
 * Version: 1.0.0
 */
(function () {
	'use strict';

	const utils     = require('../../common/utils.js');
	const _         = require('lodash');
	const providers = [
		'alertFloating',
		'alert',
		'api',
		'app',
		'breadcrumbAuto',
		'breadcrumbItem',
		'breadcrumb',
		'btn',
		'card',
		'compile',
		'datePickerDays',
		'datePickerHeader',
		'datePickerMonths',
		'datePicker',
		'datePickerWeek',
		'datePickerYears',
		'debug',
		'dropdown',
		'dynamicLocale',
		'form',
		'http',
		'input',
		'keyboard',
		'language',
		'loader',
		'localStorage',
		'location',
		'logEx',
		'media',
		'modal',
		'moment',
		'numberFormat',
		'q',
		'radio',
		'state',
		'svg',
		'tabs',
		'test',
		'textarea',
		'theme',
		'title',
		'toggle',
		'translate',
		'workflowItem',
		'workflow'
	];

	module.exports = $that => {
		_.forEach(providers, $provider => {
			utils.copyFileTpl($that, 'app/config/providers/' + $provider + '.config.txt', {
				appNameKebab  : $that.appNameKebab,
				appNameCamel  : $that.appNameCamel,
				authorShort   : $that.authorShort,
				nowDate       : $that.nowDate,
				nowTime       : $that.nowTime,
				currentVersion: $that.currentVersion
			}, 'app/config/providers/' + $provider + 'Provider.config.js');
		});
	};

})();