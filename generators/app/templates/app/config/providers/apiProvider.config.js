/**
 <%- include('../../../../../common/partial/header.txt') %>
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.config(provider);

	provider.$inject = [
		'altranApiProvider',
		'config'
	];

	function provider(altranApiProvider, config) {
		altranApiProvider
			.baseUrl(config.baseUrl);
	}

})(window.angular);