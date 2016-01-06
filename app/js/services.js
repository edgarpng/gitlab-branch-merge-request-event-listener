'use strict';

/* Services */

var gbeServices = angular.module('gbeServices', ['ngResource']);

gbeServices.factory('MR', ['$http',
    function($http) {
        var mrService = {};

        mrService.list_merge_requests = function() {
            var url = '';
            var promise = $http.get(url).then(function (response) {
                console.log(response);
                return response.data;
            });
            return promise;
        };

        return mrService;
    }]);

