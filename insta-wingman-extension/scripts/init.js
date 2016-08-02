var app = new InstaConsole();

var followerNote = {
	username: "Test",
	followedSince: DateTimeNow(),
	unfollowedAt: DateTimeNow()
};

window.setTimeout(function(){
	app.repositoryFactory.followerNoteRepository.CreateFollowerNote(followerNote);
	
	app.repositoryFactory.followerNoteRepository.CreateFollowerNote(followerNote);
	
	app.repositoryFactory.followerNoteRepository.CreateFollowerNote(followerNote);
}, 1000);

console.info("Finished Initialization");