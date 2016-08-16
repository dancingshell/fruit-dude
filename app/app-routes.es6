(function () {
  'use strict';

  angular
    .module('fruitDude')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
