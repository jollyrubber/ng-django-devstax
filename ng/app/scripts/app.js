(function(window, undefined) {

    'use strict';

    var app = angular.module('ng-django-app', [
        'ui.router',
        'ng-django-config'
    ]);


    app.config(['$stateProvider', '$urlRouterProvider',
                function($stateProvider, $urlRouterProvider) {

                    $urlRouterProvider.otherwise("/");

                    $stateProvider.state('index', {
                        url : '/',
                        templateUrl: 'root.html',
                        controller: 'RootController'
                    });

                }])
        .controller('RootController',
                    ['$scope', '$http', 'NG_DJANGO_ENV', function($scope, $http, NG_DJANGO_ENV) {

                        $scope.apiEndpoint = NG_DJANGO_ENV.apiEndpoint;
                        $scope.djangoAdmin = NG_DJANGO_ENV.djangoAdmin;

                        $scope.users = [];
                        $http.get($scope.apiEndpoint + '/users')
                            .then(function(response) {
                            $scope.users = response.data;
                        });

                    }]);

}(window));
