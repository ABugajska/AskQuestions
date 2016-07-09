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
