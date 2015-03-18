'use strict';

var app = angular.module('testApp', [
  'ngRoute', 'apiService',
  'testApp.woodInfo',
  'testApp.woodList',
  'ui-rangeSlider'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  otherwise({redirectTo: '/list'});
}]);

app.filter('rangeFilter', function() {
    return function( items, rangeInfo ) {
        var filtered = [];
        var min = parseInt(rangeInfo.min);
        var max = parseInt(rangeInfo.max);

        angular.forEach(items, function(item) {
            if( item.price >= min && item.price <= max ) {
                filtered.push(item);
            }
        });
        return filtered;
    };
});