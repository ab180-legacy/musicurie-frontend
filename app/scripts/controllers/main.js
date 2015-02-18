'use strict';

/**
 * @ngdoc function
 * @name musicurieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the musicurieApp
 */
angular.module('musicurieApp')
  .controller('MainCtrl', function ($scope) {
  	var main = this;

  	main.musics = [{
  		title: "흩날리는 벚꽃처럼",
  		artist: "류원경",
  		album: "Purdue에서 1집"
  	}, {
  		title: "요요맨",
  		artist: "NSP",
  		album: "빌딩에서 사는자 2집"
  	}]
  });
