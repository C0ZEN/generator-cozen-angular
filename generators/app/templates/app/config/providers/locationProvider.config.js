/**
 <%- include('../../../../../common/partial/header.txt') %>
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.config(provider);

	provider.$inject = [
		'$locationProvider',
		'config'
	];

	function provider($locationProvider, config) {
		$locationProvider
			.html5Mode({
				enabled    : config.html5Mode.enabled,
				requireBase: config.html5Mode.requireBase
			})
			.hashPrefix(config.hashPrefix);
	}

})(window.angular);