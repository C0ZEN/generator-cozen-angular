/**
 <%- include('../../../../../common/partial/header.txt') %>
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.config(provider);

	provider.$inject = [
		'altranDebugProvider',
		'config'
	];

	function provider(altranDebugProvider, config) {
		altranDebugProvider
			.compile(config.compile)
			.logsEnabled(config.logs.enabled);
	}

})(window.angular);