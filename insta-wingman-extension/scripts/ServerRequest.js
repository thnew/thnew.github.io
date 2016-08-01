function ServerRequest() {
	var username = null;
	var password = null;
	var server = "http://localhost:61771";
	
	this.Initialize = function(serverAccessFactory, repositoryFactory) {
		this.serverAccessFactory = serverAccessFactory;
		this.repositoryFactory = repositoryFactory;
	};
	
	this.Request = function(path, queryParam) {
		var url = this.buildUrl(path, queryParam);
		
		$.get(url, function(resp){
			console.log("resp", resp);
		});
	};
	
	/*Private functions*/
		this.buildUrl = function(path, queryParam) {
			var queryAuthParam = this.repositoryFactory.userCredentialsRepository.GetQueryParameters();
			
			queryParam.authUsername = queryAuthParam.username;
			queryParam.authDatetime = queryAuthParam.datetime;
			queryParam.authHash = queryAuthParam.hash;
			
			console.log(queryParam);
			
			queryParamList = [];
			
			for(var f in queryParam) {
				queryParamList.push(f + "=" + queryParam[f]);
			}
			
			var queryString = queryParamList.join("&");
			
			var url = server + path + "?" + queryString;
			
			return url;
		};
}