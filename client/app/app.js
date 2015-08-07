'use strict';

angular.module('materialdesignApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngMaterial',
  'ngAnimate',
  'ui.router',
  'ngAria'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });