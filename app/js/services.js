'use strict';

/* Services */

var gbeServices = angular.module('gbeServices', ['ngResource']);

gbeServices.factory('Gitlab', ['$http',
    function($http) {
        var gitlabService = {};

        gitlabService.list_merge_requests = function() {
            var url = 'https://gitlab.corp.ezrez/api/v3/projects/73/merge_requests?state=opened&private_token=' + gitlabService.private_token;
            var promise = $http.get(url).then(function (response) {
                console.log(response);
                return response.data;
            });
            return promise;
        };

        gitlabService.login = function(server, username, password) {
            var url = server + '/api/v3/session/';
            var data = {};
            data.login = username;
            data.password = password;
            console.log("calling " + url + " with " + JSON.stringify(data));
            var promise = $http.post(url, data).then(function (response) {
                console.log(response);
                gitlabService.private_token = data.private_token;
                return response.data;
            });
            return promise;
        };

        return gitlabService;
    }]);


gbeServices.factory('Storage',
    function() {

        var storage = {};



        storage.init = function() {
            var settings = {};

            //TODO
            //chrome.storage.sync.set({'settings': JSON.stringify(meerpindas)}, function() {
            //    // Notify that we saved.
            //    console.log('Settings saved');
            //});
        };

        storage.load = function() {
            //TODO
            //chrome.storage.sync.get('settings', function(obj) {
            //    console.log(obj);
            //    console.log('Settings loaded');
            //    return obj;
            //});
        };

        return storage;
    });

