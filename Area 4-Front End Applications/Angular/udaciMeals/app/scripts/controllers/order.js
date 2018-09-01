'use strict';

/**
 * @ngdoc function
 * @name controllerApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the controllerApp
 */
angular.module('controllerApp')
  .controller('OrderCtrl', ['orderManager', function (orderManager) {
    this.list = orderManager.getOrders();
  }]);
