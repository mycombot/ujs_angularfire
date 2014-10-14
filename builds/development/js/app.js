var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);
var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
    when('/thanks', {
      templateUrl: 'views/thanks.html',
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

