(function(){
  'use strict';
  angular.module('question', ['template', 'users', 'singleUser', 'singleQuestion'])
  .controller('QuestionCtrl', function(Users, $stateParams){
    var ctrl = this;

    Users.getSingleQuestionData($stateParams.id).then(function(question){
      ctrl.question = question;
      console.log(ctrl.question);
    });
  });
})();
