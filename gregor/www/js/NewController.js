function NewController($scope) {
	$scope.SUPER = $scope.$parent;
	
	$scope.members = [];
	
	$scope.newEvent = {
		title:		"",
		img:		"",
		place:		"",
		duration:	""
	};
	
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
	$scope.finalStepNr = 4;
	$scope.nextStep = function() {
		// Check for errors
		
		// Increment step
		$scope.step++;
		
		// If last step, validate event and save
		if($scope.step == $scope.finalStepNr)
		{
			$scope.newEvent.isNew = true;
			var event = new $scope.SUPER.storage.events.model($scope.newEvent);
		}
	};
	
	$scope.previousStep = function() {
		$scope.step--;
	};
	
	$scope.back = function() {
		if($scope.step <= 1 || $scope.step == $scope.finalStepNr)
		{
			$scope.SUPER.back();
		}
		else
		{
			$scope.previousStep();
		}
	};
};