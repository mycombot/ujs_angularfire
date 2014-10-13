var myApp = angular.module('myApp', []);

myApp.controller('RegisterController', ['$scope', function($scope) {

  	//Register Method
    $scope.register = function() {
      $scope.success = true;
    } //register

}]);