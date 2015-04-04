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
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
		},
		{
			name:	"Tho"
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

/*
var out = "";
var maxUsers = 250;
for(var i=1; i<=maxUsers; i++)
{
	var p = Math.round((100/i)*10000) / 10000.0;
	out += "#SelectionContainer.count-" + i + " .single-selection { width: " + p + "%; }";
}

for(var u=maxUsers; u>=2; u--)
{
	out += "@media (max-width: " + (250 + (u-2) * 75) + "px) {";
	
	for(var i=1; i<=maxUsers; i++)
	{
		var p = Math.round((i/u)*1000000) / 10000.0;
		if(p < 100) p = 100;
		out += "#SelectionContainer.count-"+i+" .time_scale_wrapper { width: " + p + "%; }";
	}
	
	out += "}";
}

console.log(out);
//*/

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