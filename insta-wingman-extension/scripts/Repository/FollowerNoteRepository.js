function FollowerNoteRepository(serverAccessFactory, repositoryFactory) {
	this.serverAccessFactory = serverAccessFactory;
	this.repositoryFactory = repositoryFactory;
	
	this.serverAccess = this.serverAccessFactory.followerNoteServerAccess;
};

FollowerNoteRepository.prototype = {
	CreateFollowerNote: function(followerNote) {
		this.serverAccess.Create(followerNote);
	}
};