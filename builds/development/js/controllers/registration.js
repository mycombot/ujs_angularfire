myApp.controller('RegistrationController', 
  function($scope, $location, $firebase) {

  var ref = new Firebase('https://regtest100.firebaseio.com/' + 'users');
  var firebaseUsers = $firebase(ref);

  $scope.users = $firebase(ref).$asArray();

  $scope.register = function() {
    var userInfo = {
      date: Firebase.ServerValue.TIMESTAMP,
      name: $scope.user.myname,
      email: $scope.user.myEmail
    }

    firebaseUsers.$push(userInfo)
    	.then(function(ref) {
			});
  } //register

  $scope.deleteReg = function(id) {
    var record = $firebase(ref);
    record.$remove(id);
  } //delete Checkin

}); //RegistrationController