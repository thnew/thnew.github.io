function SelectionController($scope){
	var times = [
		new Date(2015, 4, 7, 10, 30, 0),
		new Date(2015, 4, 7, 14, 30, 0),
		new Date(2015, 4, 7, 18, 30, 0),
		new Date(2015, 4, 8, 10, 30, 0),
		new Date(2015, 4, 8, 14, 30, 0),
		new Date(2015, 4, 8, 18, 30, 0),
		new Date(2015, 4, 9, 14, 30, 0),
		new Date(2015, 4, 9, 18, 30, 0),
		new Date(2015, 4, 10, 15, 00, 0),
		new Date(2015, 5, 8, 10, 30, 0),
		new Date(2015, 5, 9, 14, 30, 0),
		new Date(2015, 5, 9, 18, 30, 0),
		new Date(2015, 5, 10, 15, 00, 0),
		new Date(2015, 5, 11, 10, 30, 0),
		new Date(2015, 5, 11, 14, 30, 0),
		new Date(2016, 5, 11, 18, 30, 0),
		new Date(2016, 5, 15, 10, 30, 0),
		new Date(2016, 5, 15, 14, 30, 0),
		new Date(2016, 5, 16, 18, 30, 0),
		new Date(2016, 5, 17, 18, 30, 0),
		new Date(2016, 5, 18, 18, 30, 0),
		new Date(2016, 5, 19, 18, 30, 0),
		new Date(2016, 5, 19, 19, 30, 0),
		new Date(2016, 5, 19, 20, 30, 0),
		new Date(2016, 5, 19, 21, 30, 0),
	];
	
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
	}
	
	$scope.users = [
		{
			name:	"You"
		},
		{
			name:	"Til",
			image:	"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/1898057_780397738680482_3483702163707855720_n.jpg?oh=ad79bfc69ab9212be19a6f7ff42df259&oe=55ADCBFA&__gda__=1437262533_f7d51d22f5a031347de4e50837365d00"
		},
		{
			name:	"Kev",
			image:	"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/10428033_844028658988466_3927874979430380816_n.jpg?oh=887c8b22d8269637066f3a9bd5e92677&oe=55A28D51&__gda__=1437536852_09d65b763cb0f75f835508a460373d67"
		},
		{
			name:	"Mic",
			image:	"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/c27.0.160.160/p160x160/1236221_10202361112976321_1221731998_n.jpg?oh=05063462e6e465336daf8c5b3e20e478&oe=55B1379E&__gda__=1437273592_b60e05851a8ae7b2b934e22277a7468b"
		},
		{
			name:	"Tho",
			image:	"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c0.0.160.160/p160x160/1471192_677330032291203_1956559656_n.jpg?oh=a1558b40fcb9ab557d9079757e508093&oe=55B4EBCA&__gda__=1436755704_3edb002ad2b05928dcab0929261ba0a1"
		},
		{
			name:	"Max"
		},
		{
			name:	"Lis",
			image:	"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c53.32.533.533/s160x160/1004001_491643480911873_1797525855_n.jpg?oh=36ca47e39f91fc0fa67e9731bbdbff8d&oe=55A34D5A&__gda__=1438285305_c9949e17b61bb1bf1ba3f5ba0f1b6848"
		},
		{
			name:	"Mar",
			image:	"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/10625009_1523457597900918_6448130905126660255_n.jpg?oh=327592e64da8effab402196f34e234fe&oe=55ABB784&__gda__=1438450822_41c297e4fc1ff2954f2f4c2e1fd2b524"
		},
	];
	
	/* SELECTIONS */ {
		$scope.OPTION = {
			YES:	"YES",
			MAYBE:	"MAYBE",
			NO:		"NO"
		};
		var options = [ $scope.OPTION.YES, $scope.OPTION.MAYBE, $scope.OPTION.NO ];
		
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
		
		// Add month separators
		var mapWithSeparators = [];
		var i = 0;
		for(var f in $scope.selectionMap)
		{
			var day = $scope.selectionMap[f];
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
		
		$scope.selectionMap = mapWithSeparators;
		
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
			console.log(selection);
		};
	}
	
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
};