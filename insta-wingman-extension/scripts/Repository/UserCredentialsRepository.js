function UserCredentialsRepository() {
	this.Data = {
		username: null,
		password: null
	};
};

UserCredentialsRepository.prototype = {
	GetQueryHash: function(username, password, datetime) {
		var username = "test";
		var password = "test123";
		
		var hash = urlAuthentication_createHash(username, password, datetime);
		
		return(hash);
	},
	GetQueryParameters: function() {
		var datetime = DateTimeNow(60);
		
		var hash = this.GetQueryHash(this.username, this.password, datetime);
		
		return {
			username: this.username,
			datetime: datetime,
			hash: hash
		};
	},
	
	/* Getter & Setter */
	GetUsername: function() {
		return this.username;
	},
	SetUsername: function(username) {
		this.username = username;
	},
	SetPassword: function(password) {
		this.password = password;
	}
};