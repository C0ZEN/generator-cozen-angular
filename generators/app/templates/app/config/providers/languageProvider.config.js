/**
 <%- include('../../../../../common/partial/header.txt') %>
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.config(provider);

	provider.$inject = [
		'altranLanguageProvider',
		'config'
	];

	function provider(altranLanguageProvider, config) {
		altranLanguageProvider
			.setCurrent(config.defaultLanguage);
	}

})(window.angular);