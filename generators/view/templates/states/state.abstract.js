/**
 <%- include('../../../common/partial/header.txt') %>
 */
(function (angular) {
	'use strict';

	angular
		.module('<%= appNameCamel %>')
		.config('<%= configStateName %>');

	<%= configStateName %>.$inject = [
		'$stateProvider'
	];

	function <%= configStateName %>($stateProvider) {
		$stateProvider
			.state('<%= viewNameCamel %>', {
				abstract    : true,
				url         : '<%= viewUrl %>',
				template    : '<ui-view></ui-view>',
				controller  : '<%= controllerName %>',
				controllerAs: 'vm'
			});
	}

})(window.angular);