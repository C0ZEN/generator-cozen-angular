/**
 <%- include('../../common/partial/header.txt') %>
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
				url         : '<%= viewUrl %>',
				templateUrl : 'views/<%= viewNameCamel %>.template.html',
				controller  : '<%= controllerName %>',
				controllerAs: 'vm'
			});
	}

})(window.angular);