(function(){
  'use strict';
  angular.module('user', ['template', 'users', 'singleUser', 'user.form'])
  .controller('UserCtrl', function(Users, $stateParams){
    var ctrl = this;
    Users.getSingleUserData($stateParams.id).then(function(user){
      ctrl.user = user;
    });
    
  });
})();
