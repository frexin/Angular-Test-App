'use strict';

angular.module('testApp.woodInfo', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/wood/:woodId', {
            templateUrl: 'woodInfo/woodInfo.html',
            controller: 'WoodInfo'
        });
    }])

    .controller('WoodInfo', ['$scope', '$routeParams', 'Wood',
        function($scope, $routeParams, Wood) {
            $scope.wood = Wood.get({woodId: $routeParams.woodId});
        }]);