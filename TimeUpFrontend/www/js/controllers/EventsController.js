function EventsController($scope, Events) {
	//$scope.SUPER = $scope.$parent;
	
	$scope.events = [];
	
	Events.getAll(function(resp) {
		$scope.events = resp.data;
	});

	$scope.EVENT_STATUS = EVENT_STATUS;

	$scope.eventItemStateToCss = function(state) {
		switch(state)
		{
			case EVENT_STATUS.NO_VOTE_YET:
				return "event-item-todo";
        	case EVENT_STATUS.NOT_ALL_VOTES_YET:
        		return "event-item-in-progress";
		}
	};
};