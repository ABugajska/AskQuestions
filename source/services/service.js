(function(){
  'use strict';
  angular.module('users', [])
    .service('Users', function($http){
      var that = this;
      that.getAllData = function(){
        return $http.get('main.json');
      };
      that.getSingleUserData = function(id){
        return that.getAllData().then(function(response){
          for (var i = 0; i < response.data.length; i++) {
            var currentUser = response.data[i];
            if (currentUser.id === id) {
              return currentUser;
            }
          }
        });
      };
      that.getSingleQuestionData = function(id){
        return that.getAllQuestions().then(function(questions){
          for (var i = 0; i < questions.length; i++) {
            var currentQuestion = questions[i];
            if (currentQuestion.id === id) {
              return currentQuestion;
            }
          }
        });
      };
      that.getAllQuestions = function(question){
        return that.getAllData().then(function(response){
          return _.flatten(response.data.map(function(user){
            return user.questions;
          }));
        }).then(function(questions){
          for (var i = 0; i < questions.length; i++) {
            questions[i].date = new Date(questions[i].date);
          }
          return questions;
        });
      };
    });
})();
