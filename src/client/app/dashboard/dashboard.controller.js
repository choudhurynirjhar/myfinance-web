(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['dashboardService', 'logger'];
    /* @ngInject */
    function DashboardController(dashboardService, logger) {
        var vm = this;
        vm.news = {
            title: 'My Personal Finance',
            description: 'Under construction.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            return dashboardService.getExpenses(function (data) {
                vm.expenses = data;
                return vm.expenses;
            }, function(error) {
                logger.error(error);
            });
        }
    }
})();
