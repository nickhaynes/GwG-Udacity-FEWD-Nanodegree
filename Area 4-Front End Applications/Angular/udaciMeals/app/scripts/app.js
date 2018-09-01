'use strict';

/**
 * @ngdoc overview
 * @name udaciMealsApp
 * @description
 * # udaciMealsApp
 *
 * Main module of the application.
 * This is a test line.
 */
angular
  .module('udaciMealsApp', ['ui.router'])
  .config('$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',  {
        url: '/',
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('item',  {
        url: '/item/:id',
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl as item'
      });
  });