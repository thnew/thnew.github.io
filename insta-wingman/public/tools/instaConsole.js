var InstaConsole = function(performanceApi, toolContainer, popup) {
	/* Here in the constructor you initialize your whole class
	and append your tools elements to the display */
	
	// Here some elements given by the bookmarklet
		/* This is the container you can put your tool contents to
		This container will be positioned above the website, so append everything to this what can be shown there.
		You can also append <style> tags. Advantage: you don't have to remove the <style> tag in the destructor anymore,
		cause the bookmarklet will remove it automatically.
		*/
		this.toolContainer = toolContainer;

		/* If you want to use the performance API of the browser, please use the parameter-given performanceApi instead
		Advantage: the parameter-given performanceApi automatically removes all resources of the bookmarklet, so that
			the results of the API won't be altered by the bookmarklet.
		*/
		this.performanceApi = performanceApi;

		/* Use this popup to show informations
		*/
		this.popup = popup;
		
		var display = document.createElement("div");
		display.innerHTML = "Type in the commands to execute (Execute with Strg + Enter)";
		display.style.padding = 10;
		display.style.backgroundColor = "#2B2B2B";
		display.style.color = "#ECF0F1";
		this.toolContainer.appendChild(display);
		
		this.consoleTextarea = document.createElement("textarea");
		this.consoleTextarea.style.width = "100%";
		this.consoleTextarea.style.color = "#2B2B2B";
		this.consoleTextarea.style.fontFamily = "Courier";
		this.consoleTextarea.rows = 5;
		this.consoleTextarea.onkeyup = this._textareaOnClick;
		display.appendChild(this.consoleTextarea);

		var actionButtons = document.createElement("div");
		actionButtons.style.textAlign = "right";
		actionButtons.style.paddingTop = "5px";
			var execButton = document.createElement("button");
			execButton.innerText = "Execute";
			execButton.style.color = "#2B2B2B";
			actionButtons.appendChild(execButton);
		display.appendChild(actionButtons);
		
		// Hide the normal page
		this.darkScreen = document.createElement("div");
		this.darkScreen.id = "InstaWingmanDarkScreen";
		this.darkScreen.style.position = "absolute";
		this.darkScreen.style.left = "0px";
		this.darkScreen.style.top = "0px";
		this.darkScreen.style.right = "0px";
		this.darkScreen.style.bottom = "0px";
		this.darkScreen.style.backgroundColor = "rgba(43,43,43,0.95)";
		document.getElementById("InstaWingmanPageContent").appendChild(this.darkScreen);
		
		/* Style */ {
			var head = document.head || document.getElementsByTagName('head')[0];
			
			var styleElem = document.createElement("style");
			styleElem.id = "InstaConsoleStyle";
			
			var style = "#BookmarkletToolContainer *:focus { outline: none; }";
			
			style += "#BookmarkletToolContainer button { color: #ECF0F1 !important; background: transparent !important; border: 1px solid #ECF0F1 !important; border-radius: 3px !important; }";
			style += "#BookmarkletToolContainer button:hover, #BookmarkletToolContainer button:active { color: #BDC3C7 !important; background: transparent !important; border: 1px solid #BDC3C7 !important; border-radius: 3px !important; }";
			
			
			styleElem.innerHTML = style;
			head.appendChild(styleElem);
		}
	
	return {
		/* This is the destructor. It should remove all the things you append to the screen. Implement it!
		
		Everything you append to the conf.container will be removed automatically.
		Everything else you append directly to the screen, should be removed by implementing this function!
		
		It should remove:
		- Elements you appended directly to the website (e.g. overlays)
		- Style tags you added to the document (better: just append <style> tags directly to the conf.container)
		- Visual styles you appended to elements on the website (like borders to highlight elements of the website)
		*/
		destructor: function() {
			var darkScreen = document.getElementById("InstaWingmanDarkScreen");
			document.getElementById("InstaWingmanPageContent").removeChild(darkScreen);
		}
	};
};

InstaConsole.prototype = {
	_textareaOnClick: function(e) {
		console.log(e);
		if(e.keyCode == 13 && e.ctrlKey) {
			this.executeCommands();
		}
	},
	
	executeCommands: function() {
		alert(22);
	}
};