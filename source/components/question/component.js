(function(){
  'use strict';
  angular.module('singleQuestion', [])
  .component('singleQuestion', {
    bindings: {
      question: '<'
    },
    templateUrl: 'components/question/template.html'
  });
})();
