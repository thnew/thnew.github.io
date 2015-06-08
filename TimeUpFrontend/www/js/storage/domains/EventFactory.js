angular.module('starter').factory("Events", [ "Storage", "Models", "$http", function EventFactory(Storage, Models, $http) {
  this.list = [];
  
  console.log(Models);

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