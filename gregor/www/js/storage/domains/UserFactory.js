angular.module('TimeUp').factory("Users", [ "Storage", function UserFactory(Storage) {
	this.list = [];
	
	/* Create test data */ {
		this.list.push(new UserDTO({ id: 1, name: "Thomas Heigl" }));
		this.list.push(new UserDTO({ id: 2, name: "Lennart Hofstaeddter" }));
		this.list.push(new UserDTO({ id: 3, name: "Michael Leyher" }));
		this.list.push(new UserDTO({ id: 4, name: "Tilmann Huebel" }));
		this.list.push(new UserDTO({ id: 5, name: "Michael Schulz" }));
		this.list.push(new UserDTO({ id: 6, name: "Kevin Diekmann" }));
	}
	
	this.get = function(userId, callback) {
		for(var f in this.list)
		{
			var user = this.list[f];
			if(user.id == userId)
			{
				callback(Storage.Response(user));
				break;
			}
		}
	};
	
	this.getAll = function(callback) {
		callback(Storage.Response(this.list));
	};
	
	return this;
}]);

var UserDTO = function(attr) {
	if(attr.id == null) throw "Error creating new User object: Attribute id is missing";
	if(attr.name == null) throw "Error creating new User object: Attribute name is missing";
	
	this.id = attr.id;
	this.name = attr.name;
};