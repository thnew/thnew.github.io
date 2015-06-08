angular.module('starter').factory("Events", [ "Storage", "$http", function EventFactory(Storage, $http) {
  this.list = [];
  
  this.getAll = function(callback) {
    $http.get('/api/event')
      .success(function(resp, status, headers, config) {
        callback(Storage.Response(resp.data));
      })
      .error(function(data, status, headers, config) {
        alert("Error getting events from server");
      });
  };
  
  this.get = function(id, callback) {
    for(var f in this.list)
    {
      if(this.list[f].id == id)
      {
        callback(Storage.Response(this.list[f]));
        return;
      }
    }
    
    callback(Storage.Response(null, false, "Event with id '" + id + "' not found!"));
  };
  
  return this;
}]);

var EVENT_STATUS = {
  NO_VOTE_YET: "NO_VOTE_YET",
  NOT_ALL_VOTES_YET: "NOT_ALL_VOTES_YET",
  ALL_VOTED: "ALL_VOTED",
  DATE_FIXED: "DATE_FIXED"
};

function EventDTO(attr) {
  if(attr.title == null || attr.title.length == 0) throw "Error creating new User object: Attribute title is missing";
  if(attr.location == null) throw "Error creating new User object: Attribute location is missing";
  if(attr.duration == null) throw "Error creating new User object: Attribute duration is missing";
  if(attr.state == null) throw "Error creating new User object: Attribute state is missing";
  
  if(attr.isNew !== true)
  {
    if(attr.id == null) throw "Error creating new User object: Attribute id is missing";
    
    this.id = attr.id;
  }
  
  this.title = attr.title;
  this.description = attr.description;
  this.image = attr.image;
  this.location = attr.location;
  this.duration = attr.duration;
  this.state = attr.state;
};