(function(){
  'use strict';
  angular.module('home', ['template', 'users', 'singleUser', 'search'])
  .controller('UsersListCtrl', function(Users){
    var ctrl = this;
    Users.getAllData().then(function(response){
      ctrl.users = response.data;
    });
  });
})();
