function DetailController($scope, $routeParams, EventMembers, Events, Users) {
	$scope.SUPER = $scope.$parent;
	var eventId = $routeParams.eventId;
	
	$scope.event = {
		id:	eventId
	};
	
	/* Set vote options */ {
		$scope.VOTES = {
			EMPTY:	"EMPTY",
			
			YES:	"YES",
			MAYBE:	"MAYBE",
			NO:		"NO"
		};
		
		$scope.options = [ $scope.VOTES.YES, $scope.VOTES.MAYBE, $scope.VOTES.NO ];
	}
	
	/* Load event details */ {
		Events.get(eventId, function(resp) {
			if(!resp.success)
			{
				$scope.SUPER.error(resp.error);
				return;
			}
			
			$scope.event = resp.data;
		});
	}
	
	/* Load event members */ {
		EventMembers.getForEvent(eventId, function(resp) {
			if(!resp.success)
			{
				$scope.SUPER.error(resp.error);
				return;
			}
			
			var resolveNextUser = function(index) {
				var eventMember = resp.data[index];
				Users.get(eventMember.userId, function(resp) {
					if(!resp.success)
					{
						$scope.SUPER.error(resp.error);
						return;
					}
					
					eventMember.user = resp.data;
					
					if(index < (resp.data.length - 1))
					{
						resolveNextUser(index);
					}
					else
					{
						$scope.eventMembers = resp.data;
					}
				});
			};
			
			if(resp.data.length > 0)
			{
				resolveNextUser(0);
			}
		});
	}
	
	$scope.times = [
		{
			date:	new Date(2015, 4, 7, 10, 30, 0),
			vote:	$scope.VOTES.YES
		},
		{
			date:	new Date(2015, 5, 8, 10, 30, 0),
			vote:	$scope.VOTES.YES
		},
		{
			date:	new Date(2015, 5, 10, 15, 00, 0),
			vote:	$scope.VOTES.YES
		},
		{
			date:	new Date(2015, 8, 15, 10, 30, 0),
			vote:	$scope.VOTES.YES
		},
		{
			date:	new Date(2015, 8, 19, 18, 30, 0),
			vote:	$scope.VOTES.YES
		},
	];
};