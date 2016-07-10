(function(){
  'use strict';
  angular.module('AskMe', [
    'template',
    'users',
    'usersList',
    'home',
    'search',
    'ui.router',
    'ngMessages',
    'user',
    'user.form'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    //$urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('list', {
        url: '/',
        templateUrl: 'containers/home/index.html',
        controller: 'UsersListCtrl as ctrl'
      })
      .state('user', {
        url: '/user/:id',
        templateUrl: 'containers/user/index.html',
        controller: 'UserCtrl as ctrl'
      })
    $locationProvider.html5Mode(true);
  });

})();
