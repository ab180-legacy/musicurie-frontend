'use strict';

/**
 * @ngdoc overview
 * @name musicurieApp
 * @description
 * # musicurieApp
 *
 * Main module of the application.
 */
angular
  .module('musicurieApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
