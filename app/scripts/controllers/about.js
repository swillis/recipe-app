'use strict';

/**
 * @ngdoc function
 * @name recipeAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the recipeAppApp
 */
angular.module('recipeAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
