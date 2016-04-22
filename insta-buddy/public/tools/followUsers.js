var FollowUsers = function(performanceApi, toolContainer, popup) {
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
		display.innerHTML = "Hello";
		//display.style.cssText = "color:#fff;position:absolute;top:0;left:0;background-color:#000;padding:5;box-shadow:0 0 5px #000;";
		
		this.toolContainer.appendChild(display);
	
	return {
		/* This is the destructor. It should remove all the things you append to the screen. Implement it!
		
		Everything you append to the conf.container will be removed automatically.
		Everything else you append directly to the screen, should be removed by implementing this function!
		
		It should remove:
		- Elements you appended directly to the website (e.g. overlays)
		- Style tags you added to the document (better: just append <style> tags directly to the conf.container)
		- Visual styles you appended to elements on the website (like borders to highlight elements of the website)
		*/
		destructor: function() {}
	};
};