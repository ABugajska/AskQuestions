(function(){
  'use strict';
  angular.module('user', ['template', 'questions', 'singleUser'])
  .controller('UserCtrl', function(Questions, $stateParams){
    var ctrl = this;
    Questions.getSingleUserData($stateParams.id).then(function(user){
      ctrl.user = user;
    });
  });
})();

(function(){
  'use strict';
  angular.module('questionsList', ['template', 'questions', 'singleUser'])
  .controller('QuestionsListCtrl', function(Questions){
    var ctrl = this;
    Questions.getAllData().then(function(response){
      ctrl.users = response.data;
      console.log(response.data);
    });
  });
})();

(function(){
  'use strict';
  angular.module('usersList', [])
  .component('usersList', {
    bindings: {
      users: '<'
    },
    templateUrl: 'components/users/template.html'
  });
})();

(function(){
  'use strict';
  angular.module('singleUser', [])
  .component('singleUser', {
    bindings: {
      user: '<'
    },
    templateUrl: 'components/user/template.html'
  });
})();

(function(){
  'use strict';
  angular.module('questions', [])
    .service('Questions', function($http){
      var that = this;
      that.getAllData = function(){
        return $http.get('main.json');
      };
      that.getSingleUserData = function(id){
        return that.getAllData().then(function(response){
          for (var i = 0; i < response.data.length; i++) {
            var currentUser = response.data[i];
            if (currentUser.id === id) {
              return currentUser;
            }
          }
        });
      };
    });
})();

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
