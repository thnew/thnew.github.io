// Create angular app
var app = angular.module('TimeUp', ['ngRoute', 'ngAnimate']);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.otherwise({
				templateUrl:	'templates/login.html',
				title:			"Login"
			})
			.when('/events', {
				templateUrl:	'templates/events.html',
				title:			"Events"
			})
			.when('/new', {
				templateUrl:	'templates/new.html',
				title:			"New Event"
			})
			.when('/votes/:eventId', {
				templateUrl:	'templates/vote.html',
				title:			"Vote"
			})
			.when('/votes/:eventId/overview', {
				templateUrl:	'templates/overview.html',
				title:			"Vote Overview"
			})
		;
		
		//$locationProvider.html5Mode(true);
	}]);
	
app.controller('MainController', MainController);
app.controller('EventsController', EventsController);
app.controller('OverviewController', OverviewController);
app.controller('VoteController', VoteController);
app.controller('NewController', NewController);
app.controller('LoginController', LoginController);

/*
var out = "";
var maxUsers = 15;
for(var i=1; i<=maxUsers; i++)
{
	var p = Math.round((100/i)*10000) / 10000.0;
	out += ".selection_container.count-" + i + " .single-selection { width: " + p + "%; }";
}

for(var maxUsersPerScreen=maxUsers; maxUsersPerScreen>=2; maxUsersPerScreen--)
{
	out += "@media (max-width: " + (200 + (maxUsersPerScreen-2) * 75) + "px) {";
	
	for(var userCount=1; userCount<=maxUsers; userCount++)
	{
		var p = Math.round((userCount/maxUsersPerScreen)*1000000) / 10000.0;
		if(p < 100) p = 100;
		out += ".selection_container.count-" + userCount + " .time_scale_wrapper { width: " + p + "%; }";
		
		//var usersOverTheScreenLimit = userCount - maxUsersPerScreen ;
		//if(usersOverTheScreenLimit > 0)
		//{
		//	out += ".selection_container.count-" + userCount + " #HintForMoreUsers { display:block; content: '" + usersOverTheScreenLimit + "'; }";
		//	out += ".selection_container.count-" + userCount + " #HintForMoreUsers:before { content: '" + usersOverTheScreenLimit + "'; }";
		//}
	}
	
	out += "}";
}

console.log(out);

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
//*/