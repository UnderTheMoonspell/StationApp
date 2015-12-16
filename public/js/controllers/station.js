(function () {
    'use strict';

    angular.module('stationApp').controller('stationController', controller);

    controller.$inject = ['$filter', 'stationService'];
    function controller($filter, $stationsService) {
        var vm = this;
        vm.rowCollection = $stationsService.getAll();

        //Se as funções forem maiores, assignamos a variavel em cima, mas definimos a função em baixo
        vm.toggleSearch = function () {
            vm.searchEnabled = !vm.searchEnabled;
        }
    }
})();