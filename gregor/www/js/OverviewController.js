function OverviewController($scope) {
	$scope.SUPER = $scope.$parent;
	$scope.name = "OverviewController";
	
	$scope.events = [
		{
			title:			"Billard",
			description:	"2 of 4 people voted",
			img:			"http://simg.jaludo.com/th/0/0/0/8/6/6/m_8669.jpg",
			time:			new Date(2015, 4, 3, 10, 0)
		}
	];
	
	for(var i = 0; i < 10; i++)
	{
		$scope.events.push($scope.events[0]);
	}
};