function SelectionController($scope) {
	$scope.SUPER = $scope.$parent;
	$scope.name = "SelectionController";
	
	var eventId = 123;
	
	$scope.$parent.getTimes(eventId, function(resp) {
		if(!resp.success)
		{
			alert(resp.error);
			return;
		}
		
		var times = resp.data.times;
		var votes = resp.data.votes;
		$scope.users = resp.data.users;
		
		// Convert times to display format
		$scope.days = [];
		var lastday, lastMonth;
		var day;
		for(var f in times)
		{
			var t = times[f];
			
			/* Push separators for new months */ {
				var month = t.getFullYear() + "/" + t.getMonth();
				if(month != lastMonth)
				{
					var separator = {
						date:				t,
						isMonthSeparator:	true,
					};
					
					$scope.days.push(separator);
					
					lastMonth = month;
				}
			}
			
			var daydate = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
			if(daydate != lastday)
			{
				day = {
					date:		t,
					isWeekend:	(t.getDay() == 0 || t.getDay() == 6),
					times:		[]
				};
				
				$scope.days.push(day);
				
				lastday = daydate;
			}
			
			day.times.push({
				date:				t,
				positiveVoteCount:	0
			});
			
			$scope.selectionMap = convertVotesToSelectionMap(votes, times, $scope.users);
		}
		
		// Determine month separators
		$scope.monthSeparators = (function(times) {
			var lastDaysOfMonth = [];
			var lastMonth;
			for(var f in times)
			{
				var t = times[f];
				
				var month = t.getFullYear() + "/" + t.getMonth();
				if(month != lastMonth)
				{
					lastDaysOfMonth.push(t.toISOString());
					
					lastMonth = month;
				}
			}
			
			return lastDaysOfMonth;
		})(times);
	});
	
	/* SELECTIONS * / {
		$scope.selectionMap = [];
		for(var f in $scope.days)
		{
			if($scope.days[f].isMonthSeparator) continue;
			
			var day = {
				isWeekend:			$scope.days[f].isWeekend,
				times:				[]
			};
			$scope.selectionMap.push(day);
			
			for(var g in $scope.days[f].times)
			{
				var time = $scope.days[f].times[g];
				
				var timeBlock = {
					datetime:			time.date,
					positiveVoteCount:	0,
					votes:				[]
				};
				
				for(var h in $scope.users)
				{
					var option = options[Math.round(Math.random() * (options.length - 1))];
					timeBlock.votes.push(option);
				}
				day.times.push(timeBlock);
			}
		}
		
		// Count the positive votes
		for(var f in $scope.selectionMap)
		{
			var day = $scope.selectionMap[f];
			
			for(var g in day.times)
			{
				var timeBlock = day.times[g];
				
				for(var h in timeBlock.votes)
				{
					var vote = timeBlock.votes[h];
					
					if(vote == $scope.OPTION.YES || vote == $scope.OPTION.MAYBE)
					{
						timeBlock.positiveVoteCount++;
					}
				}
			}
		}
		
		// Add separators for the months
		$scope.selectionMap = addMonthSeparators($scope.selectionMap);
		
		// Copy the positive votes counter to selectionMap
		for(var f in $scope.selectionMap)
		{
			var day = $scope.selectionMap[f];
			
			for(var g in day.times)
			{
				var timeBlock = day.times[g];
				
				$scope.days[f].times[g].positiveVoteCount = timeBlock.positiveVoteCount;
			}
		}
	}
	*/
	
	/* Public functions */ {
		$scope.vote = function(selection) {
			var resultingIndex = -1;
			for(var f in options)
			{
				if(selection == options[f])
				{
					resultingIndex = f + 1;
				}
			}
			
			if(resultingIndex == -1 || resultingIndex >= options.length)
			{
				resultingIndex = 0;
			}
			
			selection = options[resultingIndex];
		};
		
		$scope._clickUserField = function(datetime) {
			var time = getVoteObjectByDatetime(datetime);
			//alert(time.votes[0]);
			
			switch(time.votes[0])
			{
				case "NO":
					time.votes[0] = "YES";
					break;
				case "YES":
					time.votes[0] = "MAYBE";
					break;
				case "MAYBE":
					time.votes[0] = "NO";
					break;
			}
		};
		
		$scope.isMonthSeparator= function(date) {
			var dateString = date.toISOString();
			
			return ($scope.monthSeparators.indexOf(dateString) != -1);
		};
	}
	
	/* Private functions */ {
		var getVoteObjectByDatetime = function(datetime) {
			for(var f in $scope.selectionMap)
			{
				var day = $scope.selectionMap[f];
				
				for(var g in day.times)
				{
					var time = day.times[g];
					
					if(time.datetime.toISOString() == datetime.toISOString())
					{
						return time;
					}
				}
			}
		};
		
		function addMonthSeparators(map) {
			// Add month separators
			var mapWithSeparators = [];
			var i = 0;
			for(var f in map)
			{
				var day = map[f];
				var dayIndex = f*1.0 + i;
				
				if($scope.days[dayIndex].isMonthSeparator === true)
				{
					var nextDay = $scope.days[dayIndex + 1];
					
					mapWithSeparators.push({
						isMonthSeparator:	true,
						date:				nextDay.date
					});
					
					i++;
				}
				
				mapWithSeparators.push(day);
			}
			
			return mapWithSeparators;
		}
		
		function convertVotesToSelectionMap(votes, times, users) {
			var map = [];
			var day, lastdaydate;
			for(var f in times)
			{
				var t = times[f];
				
				// If the times belongs to a new day, cerate a new day
				var daydate = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
				if(daydate != lastdaydate)
				{
					day = {
						date:		t,
						isWeekend:	(t.getDay() == 0 || t.getDay() == 6),
						times:		[]
					};
					
					map.push(day);
					
					lastdaydate = daydate;
				}
				
				var timeBlock = {
					datetime:			t,
					positiveVoteCount:	0,
					votes:				[]
				};
				
				day.times.push(timeBlock);
				
				for(var g in users)
				{
					var user = users[g];
					
					// Get the vote
					var vote = (votes[user.id] == null ?
						$scope.$parent.OPTION.NO
						: votes[user.id][t.toISOString()]);
					
					timeBlock.votes.push(vote);
				}
			}
			
			return map;
		}
	}
};