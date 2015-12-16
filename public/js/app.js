(function () {
    'use strict';

    angular.module('stationApp', ['ui.router'])
    .config(appConfig)
    .run(rootScope);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        //se tiver aqui os controllers n�o � preciso por no HTML
        //o controller As � para n�o esquecer para depois se usar o vm dentro do controller
        $stateProvider
        .state('station', {
            url: '/station',
            templateUrl: '../views/station.html',
            controller: 'stationController',
            controllerAs: 'vm'
		})
        .state('about', {
            url: '/about',
            templateUrl: '../views/about.html',
		});
    }
    
    function rootScope($rootScope){
        $rootScope.baseURL = '/api';
    }

})();