// Create angular app
var app = angular.module('event_selection', []);

app.controller('SelectionController', function($scope){
	$scope.days = [
		{
			date:	"Mon, 7",
			times: [ "10:00", "14:00" ]
		},
		{
			date:	"Tue, 8",
			times: [ "10:00", "14:00", "18:00" ]
		},
		{
			date:	"Wed, 9",
			times: [ "10:00", "14:00", "18:00" ]
		},
		{
			date:	"Thu, 10",
			times: [ "14:00" ]
		},
		{
			date:	"Fri, 11",
			times: [ "10:00", "14:00", "18:00" ]
		}
	];
	
	$scope.users = [
		{
			name:	"Til"
		},
		{
			name:	"Kev"
		},
		{
			name:	"Mic"
		},
		{
			name:	"Tho"
		},
	];
	
	var options = [ "yes", "maybe", "no" ];
	
	$scope.selectionMap = [];
	for(var f in $scope.days)
	{
		var day = [];
		for(var g in $scope.days[f].times)
		{
			var moment = [];
			for(var h in $scope.users)
			{
				var option = options[Math.round(Math.random() * (options.length - 1))];
				moment.push(option);
			}
			
			day.push(moment);
		}
		
		$scope.selectionMap.push(day);
	}
	
	$scope.selections = [
		[ "yes", "yes", "maybe" ]
	];
});

app.directive('ngEnter', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if(event.which === 13) {
				scope.$apply(function (){
					scope.$eval(attrs.ngEnter);
				});
				
				event.preventDefault();
			}
		});
	};
});

app.directive('ngEsc', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if(event.which === 27) {
				scope.$apply(function (){
					scope.$eval(attrs.ngEsc);
				});
				
				event.preventDefault();
			}
		});
	};
});