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
			.state('<%= stateName %>', {
				abstract    : true,
				url         : '<%= stateUrl %>',
				template    : '<ui-view></ui-view>',
				controller  : '<%= controllerName %>',
				controllerAs: 'vm'
			});
	}

})(window.angular);