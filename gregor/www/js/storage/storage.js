var Storage = function() {
	this.Response = function(data, success, error) {
		return {
			success:	success || true,
			data:		data,
			error:		error
		};
	};
	
	this.users = new Users(this);
	this.events = new Events(this);
};