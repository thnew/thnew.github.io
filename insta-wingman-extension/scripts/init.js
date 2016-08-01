var app = new InstaConsole();

var followerNote = {
	username: "Test",
	followedSince: DateTimeNow(),
	unfollowedAt: DateTimeNow()
};
app.repositoryFactory.followerNoteRepository.CreateFollowerNote(followerNote);

console.log("Ende Gelände");