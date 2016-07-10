(function(){
  'use strict';
  angular.module('usersList', ['template', 'users', 'singleUser'])
  .controller('UsersListCtrl', function(Users){
    var ctrl = this;
    Users.getAllData().then(function(response){
      ctrl.users = response.data;
    });
  });
})();
