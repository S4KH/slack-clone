angular.module('fireSlack')
.controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
	var channelsCtrl = this;

	channelsCtrl.profile = profile;
	channelsCtrl.channels = channels;
	channelsCtrl.getDisplayName = Users.getDisplayName;
	channelsCtrl.getGravatar = Users.getGravatar;

	channelsCtrl.newChannel = {
		name: ''
	};

	channelsCtrl.logout = function(){
		Auth.$unauth();
		$state.go('home');
	};

	channelsCtrl.createChannel = function(){
		channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref){
			channelsCtrl.newChannel = {
				name: ''
			};
			$state.go('channels.messages', {channelId: ref.key()});
		});
	};
});