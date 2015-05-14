function NewController($scope) {
	$scope.SUPER = $scope.$parent;
	
	$scope.members = [];
	
	/*
	$scope.SUPER.storage.users.getAll(function(resp) {
		if(!resp.success)
		{
			$scope.SUPER.storage.error(resp.error);
			return;
		}
		
		$scope.members = resp.data;
	});
	//*/
	
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
			window.location.href = "#/";
		}
		else
		{
			$scope.previousStep();
		}
	};
};