// create the module and name it scotchApp
var javadevusers = angular.module('javadevusers', ['ngRoute', 'ngResource', 'ui.bootstrap']);

javadevusers.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/content.html',
            controller: 'ContentController'
        })
        .when('/user', {
            templateUrl: 'views/user.html',
            controller: 'UserController'
        })
        .when('/user/:id', {
            templateUrl: 'views/edit.html',
            controller: 'EditController'
        })
        .otherwise({redirectTo: '/'});
});
