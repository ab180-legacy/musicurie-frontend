'use strict';

/**
 * @ngdoc function
 * @name musicurieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the musicurieApp
 */
angular.module('musicurieApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
