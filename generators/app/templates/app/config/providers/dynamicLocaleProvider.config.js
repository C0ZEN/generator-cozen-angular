/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file dynamicLocaleProvider.config on WebStorm
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
		'tmhDynamicLocaleProvider',
		'config'
	];

	function provider(tmhDynamicLocaleProvider, config) {
		tmhDynamicLocaleProvider
			.localeLocationPattern(config.localeLocationPattern);
	}

})(window.angular);