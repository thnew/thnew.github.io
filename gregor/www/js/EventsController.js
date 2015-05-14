function EventsController($scope) {
	$scope.SUPER = $scope.$parent;
	
	$scope.events = [];
	
	$scope.SUPER.storage.events.getAll(function(resp) {
		$scope.events = resp.data;
	});
};