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
