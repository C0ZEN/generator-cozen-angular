/**
 * Generated header by <%= authorShort %> for <%= appNameKebab %> project
 * Generated file httpProvider.config on WebStorm
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
		'$httpProvider'
	];

	function provider($httpProvider) {
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$httpProvider.defaults.headers.common.Accept          = 'application/json';
		$httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
	}

})(window.angular);