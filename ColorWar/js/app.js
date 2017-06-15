var playground;

var _tipps = {};

$(document).ready(function(){
	playground = new Playground();
	
	$("#Actions .clickable").each(function(index, value){
		$(value)
			.mouseover(function(){
				$("span.description", $(this).parent()).text($(this).attr("title"));
			})
			.mouseout(function(){
				$("span.description", $(this).parent()).text("");
			});
	});
	
	$("#Actions .fields").click(function(){
		$("#Shadow, #ChooseSize").show();
	});
	
	$("#Actions i.fa-refresh").click(function(){
		playground.NewGame();
	});
	
	$("#Actions i.fa-trash-o").click(function(){
		// Remove all cookies
		var cookies = $.cookie();
		for(var f in cookies) $.removeCookie(f);
		
		// Simple reinitialize of the game by reloading
		self.location.href = "";
	});
	
	$("#Actions i.fa-group").click(function(){
		_tipps.Multiplayer.Show();
	});
	
	// ChooseSize modal
	$("#ChooseSize .clickable").click(function(){
		var clickable = $(this);
		
		$("#Shadow, #ChooseSize").hide();
		
		if(clickable.text() == "Cancel") return;
		
		var fieldsX = clickable.data("fieldsx");
		var fieldsY = clickable.data("fieldsy");
		
		// Show the new size
		$("#Actions .fields").text(fieldsX + "x" + fieldsY);
		
		playground.NewGame(fieldsX, fieldsY);
	});
	
	// Show the size in the actions
	$("#Actions .fields").text(playground.FieldsX + "x" + playground.FieldsY);
});

// Keypress
$(document).keypress(function(e){
	if($(".modal").is(":visible"))
	{
		if(e.keyCode == 13) $("i.fa-refresh, i.fa-check", ".modal:visible").trigger("click");
		return;
	}
	
	var index = e.charCode - 48 - 1;
	
	$("#ColorSelection li." + index).trigger("click");
});

var Colors = [ "blue", "red", "green", "yellow", "lila" , "brown", "pink", "black", "grey" ];