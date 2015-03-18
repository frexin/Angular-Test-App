'use strict';

angular.module('testApp', [
  'ngRoute', 'apiService',
  'testApp.woodInfo',
  'testApp.woodList'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  otherwise({redirectTo: '/list'});
}]);
