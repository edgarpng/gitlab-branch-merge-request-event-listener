'use strict';

/* Controllers */

var gbeControllers = angular.module('gbeControllers', []);

gbeControllers.controller('gbeListCtrl', ['$scope', 'MR',
    function ($scope, MR) {
        MR.list_merge_requests().then(function(d) {
            $scope.mrs = d;
        });

    }]);