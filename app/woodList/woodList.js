'use strict';

angular.module('testApp.woodList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'woodList/woodList.html',
    controller: 'WoodList'
  });
}])

.controller('WoodList', ['$scope', '$routeParams', 'Wood',
    function($scope, $routeParams, Wood) {
        $scope.woods = Wood.query();

//        $scope.setImage = function(imageUrl) {
//            $scope.mainImageUrl = imageUrl;
//        }
}]);