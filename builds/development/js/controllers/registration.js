myApp.controller('RegistrationController', 
  function($scope, $location) {

  $scope.register = function() {
    $location.path('/thanks');
  } //register

}); //RegistrationController