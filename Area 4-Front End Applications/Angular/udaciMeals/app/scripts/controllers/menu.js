'use strict';

/**
 * @ngdoc function
 * @name controllerApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the controllerApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function () {
    this.id = 'strawberry-pudding';
    this.name = 'Strawberry Pudding';
    this.img = 'strawberry-pudding.jpg';
    this.rating = 5;
  });
