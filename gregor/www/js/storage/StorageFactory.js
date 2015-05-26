angular.module('TimeUp').factory("Storage", [ function StorageFactory() {
	this.Response = function(data, success, error) {
		if(success == null) success = true;
		
		return {
			success:	success,
			data:		data,
			error:		error
		};
	};
	
	return this;
}]);