function ServerRequest() {
	var username = null;
	var password = null;
	var server = "http://localhost:8080";
	var waitingQueue = [];
	var isActive = false;
	var me = this;
	
	me.Initialize = function(serverAccessFactory, repositoryFactory) {
		me.serverAccessFactory = serverAccessFactory;
		me.repositoryFactory = repositoryFactory;
	};
	
	me.UpdateDisplayCount = function(count) {
		document.querySelector("#ServerRequestLoadingLabel-count").innerText = count;
	};
	
	me.Request = function(path, queryParam, callback) {
		waitingQueue.push({
			path: path,
			queryParam: queryParam,
			callback: callback
		});
		
		me.UpdateDisplayCount(waitingQueue.length + 1);
	};
	
	window.setInterval(function() {
		if(!isActive) {
			if(waitingQueue.length > 0) {
				var request = waitingQueue.splice(0, 1)[0];
				
				me.ExecuteRequest(request.path, request.queryParam, function(resp) {
					isActive = false;
					me.UpdateDisplayCount(0);
					
					// Deactivate spinner
					document.querySelector("#ServerRequestLoadingLabel").classList.remove("serverRequestLoadingLabel-loading");
					
					// Call callback
					request.callback(resp);
				});
				
				// Set flag
				isActive = true;
				
				// Activate spinner
				document.querySelector("#ServerRequestLoadingLabel").classList.add("serverRequestLoadingLabel-loading");
				
				// Update the display count
				me.UpdateDisplayCount(waitingQueue.length + 1);
			}
		}
	}, 50);
	
	me.ExecuteRequest = function(path, queryParam, callback) {
		var targetAttribute = "temp_" + Math.round(Math.random() * 1000000);
		queryParam.targetAttribute = targetAttribute;
		
		var url = me.buildUrl(path, queryParam);
		
		// Clear the instaConsoleErrorMessage
		instaConsoleErrorMessage = null;
		
		var script = document.createElement("script");
		document.body.appendChild(script);
		script.onload = function() {
			window.clearTimeout(requestTimeout);
			
			var resp = window[targetAttribute];
			
			if(resp == null) {
				resp = {
					success: false,
					error: {
						message: instaConsoleErrorMessage
					}
				};
			}
			
			delete window[targetAttribute];
			
			callback(resp);
		};
		
		var requestTimeout = window.setTimeout(function() {
			callback({
				success: false,
				error: {
					message: "Timeout on server request (" + url + ")"
				}
			});
		}, 30000);
		
		// Load it
		script.src = url;
	};
	
	/*Private functions*/
		me.buildUrl = function(path, queryParam) {
			var queryAuthParam = me.repositoryFactory.userCredentialsRepository.GetQueryParameters();
			
			queryParam.authUsername = queryAuthParam.username;
			queryParam.authDatetime = queryAuthParam.datetime;
			queryParam.authHash = queryAuthParam.hash;
			
			queryParamList = [];
			
			for(var f in queryParam) {
				queryParamList.push(f + "=" + queryParam[f]);
			}
			
			var queryString = queryParamList.join("&");
			
			var url = server + path + "?" + queryString;
			
			return url;
		};
}