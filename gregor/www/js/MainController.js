function MainController($scope, $route) {
	$scope.storage = new Storage();
	
	$scope.error = function(error) {
		alert("An error occured: " + error);
		console.log("An error occured: ", error);
		console.log("stacktrace", stacktrace);
	};
	
	function stacktrace() { 
		function st2(f) {
			return !f ? [] : 
			st2(f.caller).concat([f.toString().split('(')[0].substring(9) + '(' + f.arguments.join(',') + ')']);
		}
		
		return st2(arguments.callee.caller);
	}
	
	$scope.$on('$routeChangeSuccess', function(event, current, previous) {
		$scope.pageTitle = $route.current.title
	});
	
	$scope.back = function() {
		window.history.back();
	};
};