(function () {
    'use strict';

    angular.module('stationApp').factory('stationService', stationService);

    stationService.$inject = ['$http', '$filter', '$rootScope'];
    function stationService($http, $filter, $rootScope) {
        var vm = this;
        var stationsAPI = {
            getAll: getAllstations,
            getByInput: getByInput
        };

        function getAllstations() {
            return $http({
                method: 'GET',
                url: $rootScope.baseURL+'/station'
            });           
        };
        
        function getByInput(textinput) {
            return $http({
                method: 'GET',
                url: $rootScope.baseURL+'/station?search='+textinput
            });          
        };
        

        return stationsAPI;

    }

})();