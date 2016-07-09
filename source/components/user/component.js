(function(){
  'use strict';
  angular.module('singleUser', [])
  .component('singleUser', {
    bindings: {
      user: '<'
    },
    templateUrl: 'components/user/template.html'
  });
})();
