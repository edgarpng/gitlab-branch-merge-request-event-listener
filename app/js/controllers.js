'use strict';

/* Controllers */

var gbeControllers = angular.module('gbeControllers', []);

gbeControllers.controller('gbeListCtrl', ['$scope', 'Gitlab', 'Storage',
    function ($scope, Gitlab, Storage) {
        Gitlab.list_merge_requests().then(function(d) {
            $scope.mrs = d;
        });

    }]);

gbeControllers.controller('gbeLoginCtrl', ['$scope', '$window', 'Gitlab', 'Storage',
    function ($scope, $window, Gitlab, Storage) {
        var settings = Storage.load();
        $scope.login = '';
        $scope.password = '';
        $scope.host = '';

        $scope.doLogin = function() {
            Gitlab.login($scope.host, $scope.username, $scope.password).then(function(token) {
                if (token.private_token != undefined) {
                    //TODO store private token
                    $window.location.href = '/app/index.html#/open_merge_requests';
                }
                else {
                    alert('Check your credentials.');
                }
            });
        };

    }]);