/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file themeProvider.config on WebStorm
 *
 * Created by: <%= authorShort %>
 * Date: <%= nowDate %>
 * Time: <%= nowTime %>
 * Version: 0.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.config(provider);

	provider.$inject = [
		'altranThemeProvider',
		'config'
	];

	function provider(altranThemeProvider, config) {
		altranThemeProvider
			.setCurrent(config.theme);
	}

})(window.angular);