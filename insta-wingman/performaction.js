function performAction(url, action) {
	var iFrame = $("<iframe>")
    .attr("Id", "InstaWindow")
    .attr("src", url)
    .css("z-index", 10)
    .css("border", "0px")
    .height("100%")
    .width("100%")
    .load(function(){
      var iframe = $("#InstaWindow").contents();
      $("img", iframe).remove();
      
      switch(action) {
      	case "Follow":
        	$("._csba8[data-reactid='.0.1.0.0:0.1.0.2.0']").click();
        	break;
      	case "Unfollow":
        	$("._988x3[data-reactid='.0.1.0.0:0.1.0.2.0']").click();
        	break;
      }
    });
  
  var overlay = $("<div>")
  	.css("position", "absolute")
    .css("top", "0px")
    .css("left", "0px")
    .css("right", "0px")
    .css("bottom", "0px")
    .css("z-index", 11)
    .css("text-align", "center")
    .css("color", "rgba(0,0,0,0,8)")
    .css("padding-top", "70px")
    .css("font-family", "Arial")
    .text(action.toLowerCase())
    .css("background-color", "rgba(255,255,255,0.8)");
    
  var wrapper = $("<div>")
  	.append(iFrame)
  	.append(overlay)
    .width(150)
    .height(150)
    .css("position", "relative")
  	.css("display", "inline-block");
    
	$("body").append(wrapper);
}

//performAction("https://fiddle.jshell.net", "Unfollow");
  
function executeCommands() {
	var textarea = $("#Commands");
  var commands = textarea.html().split("\n");
  
  alert(commands.length);
}

var textarea = $("<textarea>")
	.attr("Id", "Commands")
  .css("height", "100px")
  .width("100%")
  .keyup(function(e){
  	console.log(e);
  	if(e.keyCode == 13 && e.ctrlKey) {
    	executeCommands();
    }
  });
  
var btn = $("<button>")
	.text("Execute")
  .click(executeCommands);
  
$("<div>")
	.css("postion", "absolute")
  .css("top", "0px")
  .height(130)
  .width(300)
	.append(textarea)
  .append(btn)
  .appendTo("body");