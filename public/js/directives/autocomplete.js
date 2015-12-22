(function () {
    'use strict';

    angular
        .module('stationApp')
        .directive('autocomplete', autocomplete);
        
    autocomplete.$inject = ['stationService'];
    function autocomplete(stationService) {
        var directive = {
            restrict: 'A',
            replace: true,
            scope: {
                id: '@'
            },
            link: linkfunction,
            controllerAs: 'vm',
            controller: controller,
            bindToController: true,
            templateUrl: '../../views/_autocomplete.html'
        };

        return directive;

        function controller() {
            var vm = this;
            vm.nextLetters = [];
            vm.stationsFound = [];  
        }
		
        function linkfunction(scope, elem, attrs) {
            $('input',elem).bind('keyup', function (e) {
                scope.searchString = this.value;
                if(scope.searchString){
                    stationService.getByInput(scope.searchString ).then(function (response) {
                        autocompleteResponse(response, scope, elem);
                    });
                } else{
                    clearScopeStations(scope);                
                }
            });
            
            $('#nextWordsDiv',elem).on('click', 'p', function(){
                $('input',elem).val($(this).text());
                clearScopeStations(scope);
            });
        }
    
        function autocompleteResponse(response, scope, elem) {
            console.log(scope.searchString)
            var stationList = response.data;   
            scope.vm.nextLetters = []; 
            scope.vm.stationsFound = stationList;
            for(var i=0; i < stationList.length; i++){
                var nextLetter = stationList[i].name.substr(stationList[i].name.toLowerCase().indexOf(scope.searchString)+scope.searchString.length,1);
                var letterObject = { char : nextLetter};
                if(!jsonContains(scope.vm.nextLetters, nextLetter)){                       
                    scope.vm.nextLetters.push(letterObject);
                }                  
            }
        }
        
        function jsonContains(json, element){
            for(var i= 0; i<json.length; i++){
                if(json[i].char == element){
                    return true;
                }
            }
            return false;
        }
        
        function clearScopeStations(scope){
            scope.$apply(function(){
                scope.vm.stationsFound = [];
                scope.vm.nextLetters = []
            });   
        }
    }

})();