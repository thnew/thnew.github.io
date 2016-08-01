function InstaConsole() {
	this.serverRequest = new ServerRequest();
	
	this.serverAccessFactory = new ServerAccessFactory(this.serverRequest);
	this.repositoryFactory = new RepositoryFactory(this.serverAccessFactory);
	
	this.serverRequest.Initialize(this.serverAccessFactory, this.repositoryFactory);
}