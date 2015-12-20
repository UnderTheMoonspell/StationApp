(function () {
    'use strict';

    angular.module('stationApp').controller('stationController', controller);

    controller.$inject = ['$filter', 'stationService'];
    function controller($filter, $stationsService) {
        var vm = this;
        vm.stationList = null;
            
        $stationsService.getAll().then(getCallback);

        function getCallback(response){
            vm.stationList = response.data;
        }
    }
})();