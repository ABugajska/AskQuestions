(function(){
  'use strict';
  angular.module('questionsList', ['template', 'users', 'singleUser'])
  .controller('QuestionsListCtrl', function(Users){
    var ctrl = this;
    Users.getAllData().then(function(response){
      ctrl.users = response.data;
      console.log(response.data);
    });
  });
})();
