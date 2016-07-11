(function(){
  'use strict';
  angular.module('recentQuestions', [])
  .component('recentQuestions', {
    bindings: {
      questions: '<'
    },
    templateUrl: 'components/recent-questions/template.html',
  });
})();
