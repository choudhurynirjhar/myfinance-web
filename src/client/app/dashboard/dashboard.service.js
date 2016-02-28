(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .factory('dashboardService', dashboardService);

    dashboardService.$inject = ['Restangular', 'logger'];
    /* @ngInject */
    function dashboardService(Restangular, logger) {
        var service = {
            getExpenses: getExpenses,
        };

        return service;

        function getExpenses(success, fail) {
            Restangular.all('expense')
                .getList()
                .then(success, fail);
        }
    }
})();
