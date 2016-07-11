(function(){
  'use strict';
  angular.module('home', ['template', 'users', 'singleUser', 'search', 'recentQuestions'])
  .controller('MainCtrl', function(Users){
    var ctrl = this;
    Users.getAllQuestions().then(function(questions){
      ctrl.questions = _.flatten(questions);
      console.log(ctrl.questions);
    });
  });
})();
