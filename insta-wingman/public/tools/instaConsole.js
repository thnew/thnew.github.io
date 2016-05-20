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
		display.id = "InstaFollowUsers";
		display.innerHTML = "Type in the commands to execute (Execute with Strg + Enter)";
		display.style.padding = 10;
		display.style.backgroundColor = "#7F8C8D";
		display.style.color = "#ECF0F1";
		this.toolContainer.appendChild(display);
		
		this.consoleTextarea = document.createElement("textarea");
		this.consoleTextarea.style.width = "100%";
		this.consoleTextarea.style.color = "#2B2B2B";
		this.consoleTextarea.rows = 5;
		display.appendChild(this.consoleTextarea);

		var execButton = document.createElement("button");
		execButton.innerText = "Execute";
		execButton.style.color = "#2B2B2B";
		/*
		execButton.style.textAlign = "right";
		execButton.style.backgroundColor = "#1ABC9C";
		*/
		display.appendChild(execButton);
		
		document.getElementById("ScalePageContent").style.opacity = 0.1;
	
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
			document.getElementById("ScalePageContent").style.opacity = 1;
		}
	};
};