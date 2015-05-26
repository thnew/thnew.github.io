function EventsController($scope, Events) {
	$scope.SUPER = $scope.$parent;
	
	$scope.events = [];
	
	Events.getAll(function(resp) {
		$scope.events = resp.data;
	});
};