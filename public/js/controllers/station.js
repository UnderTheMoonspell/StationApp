(function () {
    'use strict';

    angular.module('stationApp').controller('stationController', controller);

    controller.$inject = ['$filter', 'stationService'];
    function controller($filter, $stationsService) {
        var vm = this;
        vm.stationList = null;
            
        // $stationsService.getAll().then(successCallback, errorCallback);

        // function successCallback(response){
        //     vm.stationList = response.data;
        // }
        // 
        // function errorCallback(response){
        //     alertify.error('Error when fetching server');
        // }        
    }
})();