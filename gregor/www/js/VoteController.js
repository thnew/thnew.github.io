function VoteController($scope) {
	$scope.SUPER = $scope.$parent;
	$scope.name = "VoteController";
	$scope.isScreenController = true;
	
	$scope.VOTES = {
		EMPTY:	"EMPTY",
		
		YES:	"YES",
		MAYBE:	"MAYBE",
		NO:		"NO"
	};
	
	$scope.options = [ $scope.VOTES.YES, $scope.VOTES.MAYBE, $scope.VOTES.NO ];
	
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