function LoginController($scope) {
	$scope.SUPER = $scope.$parent;
	
	$scope.login = {
		facebook: function() {
			console.log('connect');
			var client_id = '533667306772515'; //YOUR App ID or API Key
			var client_secret = '7a6ac81723d9b71bef5333fe0a224397'; //// YOUR App Secret
			var redirect_uri = 'https://www.facebook.com/connect/login_success.html';  //// YOUR CALLBACK URL
			redirect_uri = "http://localhost/";
			var display = 'touch';
			
			var authorize_url = "https://graph.facebook.com/v2.0/oauth/authorize?";
			authorize_url += "client_id=" + client_id;
			authorize_url += "&redirect_uri=" + redirect_uri;
			authorize_url += "&display=" + display;
			authorize_url += "&scope=user_friends";
			
			 var ref = window.open(authorize_url, '_blank', 'location=yes');
			ref.addEventListener('loadstart', function(event)
			{
				var loc = event.url;
				if(loc.indexOf(redirect_uri + "?") >= 0)
				{
					ref.close();
					var result = loc.split("#")[0];
					var accessToken = result.split("&")[0].split("=")[1];
					
					var url = 'https://graph.facebook.com/v2.0/oauth/access_token?';
						url += 'client_id=' + client_id;
						url += '&client_secret=' + client_secret;
						url += '&code=' + accessToken;
						url += '&redirect_uri=' + redirect_uri;
			
					$http.post(url,null).success(function(data){
						accessToken = data.split("&")[0].split("=")[1];
						url = "https://graph.facebook.com/v2.0/me/taggable_friends?access_token=" + accessToken;
						$http.get(url).success(function(data){
							this.friendsList = data.data;
							ons.navigator.pushPage('list.html',{});
						});
					});
				}
			});
		}
	};
};