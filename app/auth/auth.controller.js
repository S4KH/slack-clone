angular.module('fireSlack')
.controller('AuthCtrl', function(Auth, $state){
	var authCtrl = this;

	authCtrl.user = {
		email: '',
		password: ''
	};

	// Login user with firebase
	authCtrl.login = function(){
		Auth.$authWithPassword(authCtrl.user).then(function(auth){
			$state.go('home');
		}, function(err){
			authCtrl.err = err;
		});
	};

	// Register user with firebase
	authCtrl.register = function(){
		Auth.$createUser(authCtrl.user).then(function(user){
			authCtrl.login();
		}, function(err){
			authCtrl.err = err;
		});
	}

});