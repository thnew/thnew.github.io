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

  this.save = function(event, callback) {
    $http.put("/api/event", event)
      .success(function(resp, status, headers, config) {
        callback(new Storage.Response(resp.data));
      })
      .error(function(resp, status, headers, config) {
        alert(resp.error);
        //callback(new Storage.ErrorResponse(resp.error));
      });
  };
  
  return this;
}]);