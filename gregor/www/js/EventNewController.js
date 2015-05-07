function EventNewController($scope) {
	$scope.SUPER = $scope.$parent;
	$scope.name = "EventNewController";
	
	$scope.name = "";
	
	$scope.members = [];
	
	$scope.members.push(
		{
			name: 	"Thomas Heigl"
		},
		{
			name: 	"Thomas Heigl"
		},
		{
			name: 	"Thomas Heigl"
		},
		{
			name: 	"Thomas Heigl"
		},
		{
			name: 	"Thomas Heigl"
		},
		{
			name: 	"Thomas Heigl"
		},
		{
			name: 	"Thomas Heigl"
		},
		{
			name: 	"Kevin Diekmann"
		}
	);
	
	$scope.removeMember = function(index) {
		$scope.members.splice(index, 1);
	};
	
	$scope.step = 3;
	$scope.nextStep = function() {
		$scope.step++;
	};
};