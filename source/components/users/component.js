(function(){
  'use strict';
  angular.module('usersList', [])
  .component('usersList', {
    bindings: {
      users: '<'
    },
    templateUrl: 'components/users/template.html'
  });
})();
