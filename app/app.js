'use strict';

angular.module('testApp', [
  'ngRoute',
  'testApp.view1'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
