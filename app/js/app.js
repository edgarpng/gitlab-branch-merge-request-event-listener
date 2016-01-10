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
        when('/open_merge_requests', {
            templateUrl: 'partials/open_merge_requests.html',
            controller: 'gbeListCtrl'
        }).
        when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'gbeLoginCtrl'
        }).
        otherwise({
            redirectTo: '/login'
        });
    }]);
