function ServerAccessFactory(serverRequest) {
	this.followerNoteServerAccess = new FollowerNoteServerAccess(serverRequest, this);
}