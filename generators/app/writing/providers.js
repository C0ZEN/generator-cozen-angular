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

	const utils           = require('../../common/utils.js');
	const _               = require('lodash');
	const globalProviders = [
		'compile',
		'dynamicLocale',
		'http',
		'localStorage',
		'location',
		'logEx',
		'moment',
		'q',
		'translate'
	];
	const rootProviders   = [
		'api',
		'app',
		'btn',
		'card',
		'debug',
		'dropdown',
		'form',
		'input',
		'keyboard',
		'language',
		'loader',
		'media',
		'modal',
		'numberFormat',
		'radio',
		'state',
		'svg',
		'tabs',
		'test',
		'textarea',
		'theme',
		'title',
		'toggle'
	];
	const providers       = {
		alert     : [
			'alertFloating',
			'alert'
		],
		breadcrumb: [
			'breadcrumbAuto',
			'breadcrumbItem',
			'breadcrumb'
		],
		datePicker: [
			'datePickerDays',
			'datePickerHeader',
			'datePickerMonths',
			'datePicker',
			'datePickerWeek',
			'datePickerYears'
		],
		workflow  : [
			'workflowItem',
			'workflow'
		]
	};

	module.exports = $that => {
		_.forEach(globalProviders, $provider => {
			utils.copyFileTpl($that, 'app/config/providers/' + $provider + 'Provider.config.txt', {
				appNameKebab  : $that.appNameKebab,
				appNameCamel  : $that.appNameCamel,
				authorShort   : $that.authorShort,
				nowDate       : $that.nowDate,
				nowTime       : $that.nowTime,
				currentVersion: $that.currentVersion
			}, 'app/config/providers/' + $provider + 'Provider.config.js');
		});
		if ($that.aalBowerDependency) {
			_.forEach(rootProviders, $provider => {
				utils.copyFileTpl($that, 'app/config/providers/' + $provider + 'Provider.config.txt', {
					appNameKebab  : $that.appNameKebab,
					appNameCamel  : $that.appNameCamel,
					authorShort   : $that.authorShort,
					nowDate       : $that.nowDate,
					nowTime       : $that.nowTime,
					currentVersion: $that.currentVersion
				}, 'app/config/providers/' + $provider + 'Provider.config.js');
			});
			_.forEach(providers, ($list, $listName) => {
				_.forEach($list, $provider => {
					utils.copyFileTpl($that, 'app/config/providers/' + $listName + '/' + $provider + 'Provider.config.txt', {
						appNameKebab  : $that.appNameKebab,
						appNameCamel  : $that.appNameCamel,
						authorShort   : $that.authorShort,
						nowDate       : $that.nowDate,
						nowTime       : $that.nowTime,
						currentVersion: $that.currentVersion
					}, 'app/config/providers/' + $listName + '/' + $provider + 'Provider.config.js');
				});
			});
		}
	};

})();