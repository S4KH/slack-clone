angular.module('fireSlack')
.factory('Auth', function($firebaseAuth, FirebaseUrl){
	var ref = new Firebase(FirebaseUrl);
	var auth = $firebaseAuth(ref);

	return auth;
});