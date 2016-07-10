(function(){
  'use strict';
  angular.module('singleUser', ['user.form'])
  .component('singleUser', {
    bindings: {
      user: '<'
    },
    templateUrl: 'components/user/template.html',
    controller: function(){
      var ctrl = this;
      ctrl.addQuestion = function(question){
        ctrl.user.questions.push(question);
      };
      ctrl.deleteQuestion = function(question){
        ctrl.user.questions.splice(question, 1);
      };
    }
  });
})();
