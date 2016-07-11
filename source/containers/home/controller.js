(function(){
  'use strict';
  angular.module('home', ['template', 'users', 'singleUser', 'search'])
  .controller('MainCtrl', function(Users){
    var ctrl = this;
    Users.getAllData().then(function(response){
      ctrl.users = response.data;
    });
  });
})();
