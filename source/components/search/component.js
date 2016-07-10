(function(){
  'use strict';
  angular.module('search', [])
  .component('search', {
    bindings: {
      search: '='
    },
    templateUrl: 'components/search/template.html',
  });
})();
