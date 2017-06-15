var Playground = function(){
	this.Container = $("#Playground");
	
	// Push all players
	for(var i = 0; i < 4; i++)
	{
		this.Players.push({
			Color:	null,
			N8:		false
		});
	}
	
	// Initialize the color selection
	var colorSelection = $("#ColorSelection");
	
	for(var f in Colors)
	{
		var li = $("<li>")
			.attr("Color", Colors[f])
			.addClass("clickable")
			.addClass(f)
			.click({ Playground: this, Color: Colors[f] }, function(e){
				e.data.Playground.PlayTurn(e.data.Color);
			})
			.mouseup(function(){
				_tipps.ColorSelection.Show();
			})
			.appendTo(colorSelection);
		
		$("<div>")
			.text(f * 1.0 + 1)
			.appendTo(li);
	}
	
	for(var f in this.Players)
	{
		$("#Player" + f + " i")
			.addClass("clickable")
			.click({ PlayerNr: f }, function(e){
				var i = $(this);
				
				if(i.hasClass("fa-user")) i.removeClass("fa-user").addClass("fa-rocket");
				else if(i.hasClass("fa-rocket")) i.removeClass("fa-rocket").addClass("fa-user");
				//else if(i.hasClass("fa-rocket")) i.removeClass("fa-rocket").addClass("fa-times");
				//else if(i.hasClass("fa-times")) i.removeClass("fa-times").addClass("fa-user");
				
				$.cookie("Player" + e.data.PlayerNr + "_class", i.attr("class"));
			});
		
	}
	
	$(".playerRow div .name").click(function(){
		var playerNr = $(this).parent().attr("Player") * 1.0;
		var playerName = $(this).text();
		
		$("#Shadow").show();
	
		$("#ChooseNameSinglePlayer input").val(playerName);
		
		$("#ChooseNameSinglePlayer")
			.data("Player", playerNr)
			.show();
		
		$("#ChooseNameSinglePlayer input").focus();
	});
	
	$("#ChooseNameSinglePlayer section i.fa-check").click(function(){
		var playerNr = $("#ChooseNameSinglePlayer").data("Player");
		var playerElem = $("#Player" + playerNr);
		var name = $("#ChooseNameSinglePlayer input").val();
		
		$.cookie("Player" + playerNr, name);
		
		$(".name", playerElem).text(name);
		
		if(playerElem.hasClass("active"))
		{
			$("#ColorSelection .playername").text(name);
		}
		
		$("#Shadow").hide();
		$("#ChooseNameSinglePlayer").hide();
		
		_tipps.EditName.Show();
	});
	
	$("#ChooseNameSinglePlayer h1 i.fa-group").click(function(){
		$("#ChooseNameSinglePlayer").hide();
		$("#ChooseNameMultiPlayer").show();
	});
	
	$("#GameFinished section i.fa-refresh").click(function(){
		playground.NewGame();
	});
	
	// Daten aus Cookie laden
	for(var i = 0; i<4; i++)
	{
		if($.cookie("Player" + i) != null)
		{
			$("#Player" + i  +" .name").text($.cookie("Player" + i));
		}
		
		if($.cookie("Player" + i + "_class") != null)
		{
			$("#Player" + i  +" i").attr("class", $.cookie("Player" + i + "_class"));
		}
	}
	
	if($.cookie("FieldsX") != null) this.FieldsX = $.cookie("FieldsX") * 1.0;
	if($.cookie("FieldsY") != null) this.FieldsY = $.cookie("FieldsY") * 1.0;
	
	// Start new game
	this.NewGame();
	
	if($.cookie("Player0") == null)
	{
		$("#Shadow").show();

		$("#ChooseNameSinglePlayer")
			.data("Player", 0)
			.show();

		$("#ChooseNameSinglePlayer input").focus();
	}
};

Playground.prototype = {
	Turn:		0,
	Players:	[],
	
	Container:	null,
	
	Fields:		[],
	/*
	FieldsX:	8,
	FieldsY:	4,
	//*/
	/*
	FieldsX:	16,
	FieldsY:	8,
	//*/
	//*
	FieldsX:	32,
	FieldsY:	12,
	//*/
	/*
	FieldsX:	48,
	FieldsY:	27,
	//*/
	
	NewGame: function(fieldsX, fieldsY){
		$("#Shadow, .modal").hide();
		
		this.Turn = 0;
		
		if(fieldsX != null) this.FieldsX = fieldsX;
		if(fieldsY != null) this.FieldsY = fieldsY;
		
		$.cookie("FieldsX", this.FieldsX);
		$.cookie("FieldsY", this.FieldsY);
		
		var padding = 4 - (2 * Math.floor(this.FieldsX / 64));
		var border = 1;
		var width = (1100 - ( this.FieldsX + 1) * padding) /  this.FieldsX - border * 2;
		
		// Clear array and display-fields
		this.Fields = [];
		this.Container.children().remove();
		
		// Create and show all fields
		for(var y = 0; y < this.FieldsY; y++)
		{
			this.Fields[y] = [];
			
			for(var x = 0; x <  this.FieldsX; x++)
			{
				var rand = Math.floor(Math.random() * Colors.length);
				
				this.Fields[y][x] = $("<li>")
					.attr("Color", Colors[rand])
					.attr("Finished", "False")
					.attr("X", x)
					.attr("Y", y)
					.width(width)
					.height(width)
					.css("border-width", border)
					.css("margin-left", padding)
					.css("margin-top", padding)
					.appendTo(this.Container);
				
				$("<i>")
					.addClass("fa fa-circle")
					.appendTo(this.Fields[y][x]);
			}
			
			$("<br />").appendTo(this.Container);
		}
		
		/*/ Create random placed items
		for(var i = 0; i<Math.round(this.FieldsX * this.FieldsY * 0.1); i++)
		{
			do
			{
				var randX = Math.floor(Math.random() * this.FieldsX);
				var randY = Math.floor(Math.random() * this.FieldsY);
			} while(!this.IsColorValid(this.Fields[randY][randX].attr("Color")));
			
			$("i", this.Fields[randY][randX]).removeClass("fa-circle").addClass("fa-th-large");
		}
		//*/
		
		// Set 4 different Colors for the players
		for(var f in this.Players)
		{
			var p = this.GetCornerCoordinatesForPlayer(f);
			
			this.GetField(p.X, p.Y)
				.attr("Player", f)
				.attr("Color", Colors[f]);
			
			var count = this.FirstMark(p.X, p.Y);
			
			$("#Player" + f + " .count").text(count);
		}
		
		// Mark first player as active
		$(".playerRow div").removeClass("active");
		$("#Player0").addClass("active");
		
		this.InitializeColorSelection();
	},
	
	PlayTurn: function(color){
		var playerNr = this.Turn % this.Players.length;
		
		var player = $("#Player" + playerNr);
		
		// Determine the corner coordinates
		var p = this.GetCornerCoordinatesForPlayer(playerNr);
		
		// Set the new color
		var result = this.SetFieldColor(p.X, p.Y, color);
		
		// If no success (maybe because of non valid color), cancel
		if(!result) return;
		
		// Refresh count
		$(".count", player).text(result);
		
		// Raise the Turn Index
		this.Turn++;
		playerNr = this.Turn % this.Players.length;
		
		player = $("#Player" + playerNr);
		
		// Highlight active player
		$(".playerRow div").removeClass("active");
		player.addClass("active");
		
		// Reinitialize the color selection
		this.InitializeColorSelection();
		
		// Count total fields allocated
		var total = 0;
		for(var f in this.Players) total += $("#Player" + f + " .count").text() * 1.0;
		
		if(total == (this.FieldsX * this.FieldsY))
		{
			var highscore = [];
			
			for(var f in this.Players) highscore.push({ Name: $("#Player" + f + " .name").text(), Score: $("#Player" + f + " .count").text() * 1.0 });
			
			highscore.sort(function(a, b) {return b.Score - a.Score});			
			
			$("h1 span", "#GameFinished").text(highscore[0].Name);
			
			var ol = $("ol", "#GameFinished");
			ol.children().remove();
			
			for(var f in highscore)
			{
				$("<li>")
					.text(highscore[f].Name)
					.appendTo(ol);
			}
			
			$("#GameFinished, #Shadow").show();
			return;
		}
		
		// Check if next player is not a user, if not, execute next Turn
		// Go through players, till a user appears
		var icon = $(".playerRow div.active i");
		
		do
		{
			if(icon.hasClass("fa-user")) break;
			// If player is disabled, continue to next player
			else if(icon.hasClass("fa-times"))
			{
				// Raise the Turn Index
				this.Turn++;
				playerNr = this.Turn % this.Players.length;
				player = $("#Player" + playerNr);
				
				// Highlight active player
				$(".playerRow div").removeClass("active");
				player.addClass("active");
				console.log(1);
			}
			else
			{
				window.setTimeout(function(){
					playground.BotExecution();
				}, 0)
				break;
			}
			
			icon = $("#Player" + playerNr + " i");
		} while(true);
	},
	
	BotExecution: function(){
		$("#ColorSelection li").addClass("disabled");
		
		var playerNr = this.Turn % this.Players.length;
		var bestColors = this.FindBestColorsForPlayer(playerNr);
		
		// Only the valid colors
		var sortable = [];
		for(var f in bestColors)
		{
			if(this.IsColorValid(f)) sortable.push({ Color: f, Count: bestColors[f] });
		}
		
		sortable.sort(function(a, b) {return b.Count - a.Count});
		
		window.setTimeout(function(){
			playground.PlayTurn(sortable[0].Color);
		}, 0);
	},
	
	FindBestColorsForPlayer: function(playerNr){
		var p = this.GetCornerCoordinatesForPlayer(playerNr);
		var field = this.GetField(p.X, p.Y);
		var playerNr = field.attr("Player");
		
		var playerColor = field.attr("Color");
		
		// Color all other old-colored fields
		var oldFields = [];
		
		// Add all existing user fields
		$("li[Player=" + playerNr + "][Finished=False]", this.Container).each(function(index, value){
			oldFields.push($(value));
		});
		
		// go through oldFields-array, till it's empty
		var bestColors = {};
		
		for(var f in Colors) bestColors[Colors[f]] = 0;
		
		while(oldFields.length > 0)
		{
			var x = oldFields[0].attr("X") * 1.0;
			var y = oldFields[0].attr("Y") * 1.0;
			
			// Add N-4 neighbourhood
			var neighbours = 
			{
				Left:	this.GetField(x - 1, y),
				Right:	this.GetField(x + 1, y),
				Top:	this.GetField(x, y - 1),
				Bottom:	this.GetField(x, y + 1)
			};
			
			if(this.Players[playerNr].N8)
			{
				neighbours.TopLeft = this.GetField(x - 1, y - 1);
				neighbours.TopRight = this.GetField(x + 1, y - 1);
				neighbours.BottomLeft = this.GetField(x - 1, y + 1);
				neighbours.BottomRight = this.GetField(x + 1, y + 1);
			}
			
			for(var f in neighbours)
			{
				if(neighbours[f].length > 0 && neighbours[f].attr("Player") != playerNr)
				{
					var fieldColor = neighbours[f].attr("Color");
					
					if(fieldColor == playerColor) oldFields.push(neighbours[f]);
					else bestColors[fieldColor] = (bestColors[fieldColor] || 0) + 1;
				}
			}
			
			// Remove the field from the array
			oldFields.splice(0, 1);
		}
		
		return bestColors;
	},
	
	SetFieldColor: function(fieldX, fieldY, color){
		var field = this.GetField(fieldX, fieldY);
		var playerNr = field.attr("Player");
		
		if(!this.IsColorValid(color)) return false;
		
		// Color all other old-colored fields
		var oldFields = [];
		
		// Add all existing user fields
		$("li[Player=" + playerNr + "][Finished=False]", this.Container).each(function(index, value){
			oldFields.push($(value));
		});
		
		// Color all current fields
		$("li[Player=" + playerNr + "]").attr("Color", color);
		
		// go through oldFields-array, till it's empty
		var counter = 0;
		while(oldFields.length > 0)
		{
			// Look for items
			var item_n8 = $("i", oldFields[0]).hasClass("fa-th-large");
			
			// Read Coordinates
			var x = oldFields[0].attr("X") * 1.0;
			var y = oldFields[0].attr("Y") * 1.0;
			
			// Add N-4 neighbourhood
			var neighbours = 
			{
				Left:	this.GetField(x - 1, y),
				Right:	this.GetField(x + 1, y),
				Top:	this.GetField(x, y - 1),
				Bottom:	this.GetField(x, y + 1)
			};
			
			if(this.Players[playerNr].N8 || item_n8)
			{
				neighbours.TopLeft = this.GetField(x - 1, y - 1);
				neighbours.TopRight = this.GetField(x + 1, y - 1);
				neighbours.BottomLeft = this.GetField(x - 1, y + 1);
				neighbours.BottomRight = this.GetField(x + 1, y + 1);
			}
			
			// Look for items
			if(item_n8)
			{
				for(var f in neighbours)
				{
					if(neighbours[f].attr("Player") != playerNr) neighbours[f].attr("Color", color);
				}
			}
			
			var relevantNeighbours = 4;
			for(var f in neighbours)
			{
				if(neighbours[f].attr("Player") != playerNr)
				{
					if(neighbours[f].attr("Color") == color) oldFields.push(neighbours[f]);
				}
				
				if(neighbours[f].attr("Player") != null || neighbours[f].length == 0) relevantNeighbours--;
			}
			
				// if all neighbours are owned by the player, mark it
			if(relevantNeighbours == 0) oldFields[0].attr("Finished", "true");
			
			if(oldFields[0].attr("Player") == null)
			{
				// Mark the field
				oldFields[0].attr("Player", playerNr);
				
				oldFields[0]
					.css("opacity", 0.2)
					.animate({ opacity: 1 }, 500);
			}
			
			// Remove the field from the array
			oldFields.splice(0, 1);
		}
		
		return $("li[Player=" + playerNr + "]", this.Container).length;
	},
	
	FirstMark: function(fieldX, fieldY){
		var field = this.GetField(fieldX, fieldY);
		var playerNr = field.attr("Player");
		
		var color = field.attr("Color");
		
		// Color all other old-colored fields
		var oldFields = [ field ];
		
		// go through oldFields-array, till it's empty
		var counter = 0;
		while(oldFields.length > 0)
		{
			var x = oldFields[0].attr("X") * 1.0;
			var y = oldFields[0].attr("Y") * 1.0;
			
			// Add N-4 neighbourhood
			var neighbours = 
			{
				Left:	this.GetField(x - 1, y),
				Right:	this.GetField(x + 1, y),
				Top:	this.GetField(x, y - 1),
				Bottom:	this.GetField(x, y + 1)
			};
			
			for(var f in neighbours)
			{
				if(neighbours[f].attr("Player") != playerNr)
				{
					if(neighbours[f].attr("Color") == color) oldFields.push(neighbours[f]);
				}
			}
			
			// Mark the field
			oldFields[0].attr("Player", playerNr);
			
			// Remove the field from the array
			oldFields.splice(0, 1);
		}
		
		return $("li[Player=" + playerNr + "]", this.Container).length;
	},
	
	GetField: function(x, y){
		if(x < 0 || x >= this.FieldsX) return $();
		if(y < 0 || y >= this.FieldsY) return $();
		
		return this.Fields[y][x];
		//return $("li[X=" + x + "][Y=" + y + "]", this.Container);
	},
	
	GetCornerCoordinatesForPlayer: function(playerNr){
		// Make sure, the switch-case gets a number
		playerNr = playerNr * 1.0;
		
		var x, y;
		
		switch(playerNr)
		{
			case 0:
				x = 0;
				y = 0;
				break;
			case 1:
				x = this.FieldsX - 1;
				y = 0;
				break;
			case 2:
				x = 0;
				y = this.FieldsY - 1;
				break;
			case 3:
				x = this.FieldsX - 1;
				y = this.FieldsY - 1;
				break;
		}
		
		return {
			X:	x,
			Y:	y
		};
	},
	
	IsColorValid: function(color){
		for(var f in this.Players)
		{
			var p = this.GetCornerCoordinatesForPlayer(f);
			
			if(this.Fields[p.Y][p.X].attr("Color") == color) return false;
		}
		
		for(var f in Colors)
		{
			if(Colors[f] == color) return true;
		}
		
		return false;
	},
	
	InitializeColorSelection: function(){
		var playerNr = this.Turn % this.Players.length;
		
		// Initialize Color Selectrion
		var colorSelection = $("#ColorSelection");
		
		// show/hide colors
		for(var f in Colors) $("li[Color=" + Colors[f] + "]", colorSelection).toggleClass("disabled", !this.IsColorValid(Colors[f]));
		
		// Set new player Nr in Color Selectrion
		var player = $("#Player" + playerNr);
		$(".playername", colorSelection).text($(".name", player).text());
	}
};