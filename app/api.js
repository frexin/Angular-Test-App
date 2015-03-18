'use strict';

var apiService = angular.module('apiService', ['ngResource']);

apiService.factory('Wood', ['$resource',
function($resource) {
    return $resource('http://demo8316179.mockable.io/wood/:woodId', {}, {
        query: {method:'GET', params: {woodId:'list'}, isArray:true}
    });
}]);
