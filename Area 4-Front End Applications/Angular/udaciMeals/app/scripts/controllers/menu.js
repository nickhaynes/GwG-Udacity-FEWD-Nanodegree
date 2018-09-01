'use strict';

/**
 * @ngdoc function
 * @name controllerApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the controllerApp
 */
angular.module('udaciMealsAngularApp')
  .controller('MenuCtrl', function(foodFinder, orderManager) {
    var vm = this;
    
    foodFinder.getMenu().then(
      function(data) {
	    _this.items = data;
      }
    );

    this.chooseItem = function(menuCategory, menuItemName) {
      orderManager.chooseMenuOption(menuCategory, menuItemName);
    };
  });
