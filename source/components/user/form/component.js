(function(){
  'use strict';
  angular.module('user.form', [])
  .component('userForm', {
    bindings: {
      user: '<',
      addQuestion: '<'
    },
    templateUrl: 'components/user/form/template.html'
  });
})();
