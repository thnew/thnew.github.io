function FollowerNoteServerAccess(serverRequest, serverAccessFactory) {
	this.serverRequest = serverRequest;
	this.serverAccessFactory = serverAccessFactory;
};

FollowerNoteServerAccess.prototype = {
	Create: function(followerNote) {
		var queryParam = {
			followedSince: followerNote.followedSince,
			unfollowedAt: followerNote.unfollowedAt
		};
		
		var path = "/follower/" + followerNote.username + "/update";
		
		this.serverRequest.Request(path, queryParam, function(resp) {
			console.log("resp", resp);
		});
	}
};