function MainController($scope) {
	$scope.isScreenA = true;
	
	$scope.switchScreens = function() {
		$scope.isScreenA = !$scope.isScreenA;
	};
};