/**
 <%- include('../../common/partial/header.txt') %>
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.factory('<%= serviceName %>', <%= serviceName %>);

	<%= serviceName %>.$inject = [];

	function <%= serviceName %>() {
		return {};
	}

})(window.angular);