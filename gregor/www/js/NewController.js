function NewController($scope) {
	$scope.SUPER = $scope.$parent;
	$scope.name = "NewController";
	
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
	
	$scope.step = 1;
	$scope.nextStep = function() {
		$scope.step++;
	};
	
	$scope.previousStep = function() {
		$scope.step--;
	};
	
	$scope.back = function() {
		if($scope.step <= 1)
		{
			$scope.SUPER.showScreen($scope.SUPER.SCREENS.EVENTS)
		}
		else
		{
			$scope.previousStep();
		}
	};
};