'use strict';

/* Services */

var gbeServices = angular.module('gbeServices', ['ngResource']);

gbeServices.factory('Gitlab', ['$http',
    function($http) {
        var gitlabService = {};
        gitlabService.host='https://gitlab.corp.ezrez';




        gitlabService.login = function(host, username, password) {
            var url = host + '/api/v3/session/';
            var data = {};
            data.login = username;
            data.password = password;

            return $http.post(url, data).then(function (response) {
                console.log(response);
                gitlabService.private_token = data.private_token;
                return response.data;
            });
        };


        //https://gitlab.corp.ezrez/switchfly/dev/merge_requests?assignee_id=168&label_name=&milestone_id=&scope=all&sort=newest&state=opened
        gitlabService.list_merge_requests = function() {
            var url = gitlabService.host + '/api/v3/projects/73/merge_requests?state=opened&private_token=' + gitlabService.private_token;

            return $http.get(url).then(function (response) {
                console.log(response.data); //TODO remove
                console.log(JSON.stringify(response.data)); //TODO remove
                return response.data;
            });
        };

        gitlabService.get_merge_requests_comments = function(merge_request_id) {
            console.log(merge_request_id);
            var url = gitlabService.host + '/api/v3/projects/73/merge_request/' + merge_request_id + '/comments?private_token=' + gitlabService.private_token;

            return $http.get(url).then(function (response) {
                console.log(response); //TODO remove
                return response.data;
            });
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

