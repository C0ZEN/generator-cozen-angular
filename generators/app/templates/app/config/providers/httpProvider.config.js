/**
 <%- include('../../../../../common/partial/header.txt') %>
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