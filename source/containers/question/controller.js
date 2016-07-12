(function(){
  'use strict';
  angular.module('question', ['template', 'users', 'singleUser'])
  .controller('QuestionCtrl', function(Users, $stateParams){
    var ctrl = this;
    Users.getAllQuestions().then(function(questions){
      ctrl.questions = questions;
      console.log(ctrl.questions);
    });
    Users.getSingleQuestionData($stateParams.id).then(function(question){
      ctrl.question = question;
      console.log(ctrl.question);
    });
  });
})();
