function RepositoryFactory(serverAccessFactory) {
	this.userCredentialsRepository = new UserCredentialsRepository(serverAccessFactory, this);
	this.followerNoteRepository = new FollowerNoteRepository(serverAccessFactory, this);
}