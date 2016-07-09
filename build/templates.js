(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('index.html',
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
    '<html><head><title>Ask me</title><link rel="stylesheet" href="/application.css" /><meta content="width=device-width, initial-scale=1" name="viewport" /></head><body ng-app="AskMe"><base href="/" /><ui-view></ui-view><script src="bower.js"></script><script src="templates.js"></script><script src="application.js"></script></body></html>');
}]);
})();

(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/user/template.html',
    '<a ui-sref="list">back</a><h1>{{$ctrl.user.name}}</h1><p>Recent questions:</p><ul><li ng-repeat="question in $ctrl.user.questions"><button ng-click="showAnswer = !showAnswer" class="show-btn"><p>{{question.question}}</p></button><p ng-show="showAnswer" class="answer">{{question.answer}}</p></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/users/template.html',
    '<ul><li ng-repeat="user in $ctrl.users"><a ui-sref="user({id:user.id})">{{ user.name }}&nbsp;({{user.questions.length}})</a></li></ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('containers/home/index.html',
    '<div><h2>Ask me!</h2><users-list users="ctrl.users"></users-list></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('template');
} catch (e) {
  module = angular.module('template', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('containers/user/index.html',
    '<a></a><single-user user="ctrl.user"></single-user>');
}]);
})();
