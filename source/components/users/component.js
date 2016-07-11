(function(){
  'use strict';
  angular.module('usersList', [])
  .component('usersList', {
    bindings: {
      users: '<'
    },
    templateUrl: 'components/users/template.html',
    controller: function(){
      var ctrl = this;
      ctrl.limit = 5;
      ctrl.showMore = function(){
        ctrl.limit = ctrl.limit + 5;
      };
      ctrl.searchUser = "";
    }
  });
})();
