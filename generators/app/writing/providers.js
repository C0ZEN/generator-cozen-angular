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
		'apiProvider',
		'appProvider',
		'debugProvider',
		'dynamicLocaleProvider',
		'httpProvider',
		'languageProvider',
		'locationProvider',
		'themeProvider',
		'titleProvider',
		'translateProvider',
		'urlRouterProvider'
	];

	module.exports = $that => {
		_.forEach(providers, $provider => {
			utils.copyFileTpl($that, 'app/config/providers/' + $provider + '.config.js', {
				appNameKebab: $that.appNameKebab,
				appNameCamel: $that.appNameCamel,
				authorShort : $that.authorShort,
				nowDate     : $that.nowDate,
				nowTime     : $that.nowTime
			});
		});
	};

})();