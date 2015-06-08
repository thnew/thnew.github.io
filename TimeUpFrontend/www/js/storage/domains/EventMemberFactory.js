angular.module('TimeUp').factory("EventMembers", [ "Storage", function EventMemberFactory(Storage) {
	this.list = [];
	
	/* Create test data */ {
		this.list.push(new EventMemberDTO({ userId: 1, eventId: 1, participationType: PARTICIPATION_TYPE.PARTICIPATION }));
		this.list.push(new EventMemberDTO({ userId: 2, eventId: 1, participationType: PARTICIPATION_TYPE.PARTICIPATION }));
	}
	
	this.getForEvent = function(eventId, callback) {
		var eventMembers = [];
		
		for(var f in this.list)
		{
			if(this.list[f].eventId == eventId)
			{
				eventMembers.push(this.list[f]);
			}
		}
		
		callback(Storage.Response(eventMembers));
	};
	
	return this;
}]);

var PARTICIPATION_TYPE = {
	PARTICIPATION:		"PARTICIPATION",
	NO_PARTICIPATION:	"NO_PARTICIPATION",
	NOT_DEFINED:		"NOT_DEFINED"
};

var PARTICIPATION_TYPE_LIST = [
	PARTICIPATION_TYPE.PARTICIPATION,
	PARTICIPATION_TYPE.NO_PARTICIPATION,
	PARTICIPATION_TYPE.NOT_DEFINED
];

var EventMemberDTO = function(attr) {
	if(attr.eventId == null) throw "Error creating new EventMember object: Attribute eventId is missing";
	if(attr.userId == null) throw "Error creating new EventMember object: Attribute userId is missing";
	if(attr.participationType == null) throw "Error creating new EventMember object: Attribute participationType is missing";
	if(PARTICIPATION_TYPE_LIST.indexOf(attr.participationType) == -1) throw "Error creating new EventMember object: Attribute participationType 'attr.participationType' is not valid";
	
	this.eventId = attr.eventId;
	this.userId = attr.userId;
	this.participationType = attr.participationType;
};