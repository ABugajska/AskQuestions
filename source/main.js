(function(){
  'use strict';
  angular.module('AskMe', [
    'template',
    'questions',
    'questionsList',
    'usersList',
    'ui.router',
    'user'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    //$urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('list', {
        url: '/',
        templateUrl: 'containers/home/index.html',
        controller: 'QuestionsListCtrl as ctrl'
      })
      .state('user', {
        url: '/user/:id',
        templateUrl: 'containers/user/index.html',
        controller: 'UserCtrl as ctrl'
      })
    $locationProvider.html5Mode(true);
  });

})();
