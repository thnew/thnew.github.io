var Users = function(storage) {
	this.list = [];
	
	/* Create test data */ {
		this.list.push(new User({ id: 1, name: "Thomas Heigl" }));
		this.list.push(new User({ id: 2, name: "Lennart Hofstaeddter" }));
		this.list.push(new User({ id: 3, name: "Michael Leyher" }));
		this.list.push(new User({ id: 4, name: "Tilmann Huebel" }));
		this.list.push(new User({ id: 5, name: "Michael Schulz" }));
		this.list.push(new User({ id: 6, name: "Kevin Diekmann" }));
	}
	
	this.getAll = function(callback) {
		callback(new storage.Response(this.list));
	};
};

var User = function(attr) {
	if(attr.id == null) throw "Error creating new User object: Attribute id is missing";
	if(attr.name == null) throw "Error creating new User object: Attribute name is missing";
	
	this.id = attr.id;
	this.name = attr.name;
};