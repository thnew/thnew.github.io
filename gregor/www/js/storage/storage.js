var Storage = function() {
	this.Response = function(data, success, error) {
		if(success == null) success = true;
		
		return {
			success:	success,
			data:		data,
			error:		error
		};
	};
	
	this.users = new Users(this);
	this.events = new Events(this);
};