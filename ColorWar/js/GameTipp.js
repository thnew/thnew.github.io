var _tipps = _tipps || {};

var GameTipp = function(config){
	if(config.Id == null) alert("Every Game Tipp needs an Id!");
	if(config.Html == null) alert("Every Game Tipp needs Html!");
	
	this.Id = config.Id;
	this.Title = config.Title;
	this.Html = config.Html;
	this.Callback = config.Callback;
	
	if(this.Callback != null && typeof(this.Callback) != "function") alert("Type of callback for Game Tipp is not function! Given: " + typeof(this.Callback));
	
	if(config.Title == null) this.Title = "Just a quick tipp";
	if(config.Countdown != null) this.Countdown = config.Countdown;
	if(config.ShowAlways != null) this.ShowAlways = config.ShowAlways;
	
	if($.cookie("Cookie_" + this.Id) != null) this.Seen = true;
};

GameTipp.prototype =
{
	Html:		null,
	Countdown:	0,
	Seen:		false,
	ShowAlways:	false,
	
	Show: function(){
		if(this.Seen) return;
		
		if(this.Countdown > 1)
		{
			this.Countdown--;
			return;
		}
		
		$("#GameTipp").data("Object", this);
		
		$("#GameTipp .title").text(this.Title);
		
		$("#GameTipp .content")
			.text("")
			.append(this.Html);
		
		$("#Shadow, #GameTipp").show();
	},
	
	Hide: function(){
		$("#Shadow, #GameTipp").hide();
		
		$.cookie("Cookie_" + this.Id, true);
		
		if(!this.ShowAlways) this.Seen = true;
		if(this.Callback != null) this.Callback();
	}
};

$(document).ready(function(){
	$("#GameTipp .clickable").click(function(){
		$("#GameTipp").data("Object").Hide();
	});
	
	_tipps.GetStarted = new GameTipp({
			Id:		"GetStarted",
			Title:	"How to play",
			Html:	$("<span>")
				.html('You control the blocks at the top-left. Choose a color and your blocks change to this color. Neighbour blocks with the same colors will add to your control. Gain the most blocks and win the war!<br /><img src="img/gametipp/GetStarted.jpg" />')
		});
		
	_tipps.EditName = new GameTipp({ Id: "EditName", Html: $("<span>").html('You can edit every name by simply clicking at it<br /><img src="img/gametipp/ChooseName.jpg" />'), Callback: function() { _tipps.GetStarted.Show(); } });
	_tipps.ColorSelection = new GameTipp({ Id: "ColorSelection", Html: $("<span>").html('You can choose the colors faster, using your number keys<br /><img src="img/gametipp/ColorSelection.jpg" />'), Countdown: 3 });
	_tipps.Multiplayer = new GameTipp({ Id: "ColorSelection", Html: $("<span>").html('If you want to play multiplayer, simply switch one of the bots to a real user by clicking at the icon<br /><img src="img/gametipp/Multiplayer.jpg" />'), ShowAlways: true });
});