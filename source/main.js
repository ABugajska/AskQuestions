(function(){
  'use strict';
  angular.module('AskMe', [
    'template',
    'users',
    'usersList',
    'recentQuestions',
    'singleQuestion',
    'question',
    'home',
    'search',
    'ui.router',
    'ngMessages',
    'user',
    'list',
    'user.form'

  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    //$urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'containers/home/index.html',
        controller: 'MainCtrl as ctrl'
      })
      .state('list', {
        url: '/list',
        templateUrl: 'containers/users/index.html',
        controller: 'UsersListCtrl as ctrl'
      })
      .state('user', {
        url: '/user/:id',
        templateUrl: 'containers/user/index.html',
        controller: 'UserCtrl as ctrl'
      })
      .state('question', {
        url: '/question/:id',
        templateUrl: 'containers/question/index.html',
        controller: 'QuestionCtrl as ctrl'
      })
    $locationProvider.html5Mode(true);
  });

})();
