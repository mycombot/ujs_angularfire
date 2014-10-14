var myApp = angular.module('myApp', ['ngRoute','firebase']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
    when('/thanks', {
      templateUrl: 'views/thanks.html',
      controller:  'RegistrationController'
    }).
    when('/list', {
      templateUrl: 'views/list.html',
      controller:  'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller:  'RegistrationController'
    }).
    otherwise({
      redirectTo: '/register',
    });
}]);

