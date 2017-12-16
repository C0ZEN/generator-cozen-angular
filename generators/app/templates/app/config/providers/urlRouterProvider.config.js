/**
 <%- include('../../../../../common/partial/header.txt') %>
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.config(provider);

	provider.$inject = [
		'$urlRouterProvider',
		'config'
	];

	function provider($urlRouterProvider, config) {
		$urlRouterProvider
			.otherwise(config.urlOtherwise);
	}

})(window.angular);