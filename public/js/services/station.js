(function () {
    'use strict';

    angular.module('stationApp').factory('stationService', stationService);

    stationService.$inject = ['$http', '$filter', '$rootScope'];
    function stationService($http, $filter, $rootScope) {
        var vm = this;
        var stationsAPI = {
            getAll: getAllstations,
        };

        vm.list =
            [
				{"_id":0, "name": "Liverpool"},
				{"_id":1, "name": "Manchester"},
				{"_id":2, "name": "London 1"},
				{"_id":3, "name": "London 2"},
				{"_id":4, "name": "Liverpool 3"},
				{"_id":5, "name": "Liverpool 2"},
				{"_id":6, "name": "Portsmouth"},
				{"_id":7, "name": "Wales"},
				{"_id":8, "name": "Glasgow"},
				{"_id":9, "name": "Edinburgh"}
            ];

        function getAllstations() {
            // return vm.list;
                    
            $http.get($rootScope.baseURL+'/station').then(function(res){
                
            });            
        }

        return stationsAPI;

    }

})();