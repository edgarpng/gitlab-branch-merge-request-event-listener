'use strict';

/* App Module */

var gbeApp = angular.module('gbeApp', [
    'ngRoute',
    'gbeControllers',
    'gbeServices'
]);

gbeApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/branches', {
            templateUrl: 'partials/branches.html',
            controller: 'gbeListCtrl'
        }).
        otherwise({
            redirectTo: '/branches'
        });
    }]);
