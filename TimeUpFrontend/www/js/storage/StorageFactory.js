angular.module('starter').factory("Storage", [ function StorageFactory() {
  this.Response = function(data, success, error) {
    if(success == null) success = true;
    
    return {
      success: success,
      data: data,
      error: error
    };
  };

  this.ErrorResponse = function(error) {
    return {
      success: false,
      error: error
    };
  };
  
  return this;
}]);