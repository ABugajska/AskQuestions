(function(){
  'use strict';
  angular.module('questions', [])
    .service('Questions', function($http){
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
    });
})();
