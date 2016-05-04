var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

var user = "heiglfitness";
var pw = "HeiglSecret#Password";

var client = webdriverio
	.remote(options)
	.init()
	.url('http://www.instagram.com');

client.title(function(err, res) {
	console.log('Title was: ' + res.value);
	
	if(!isLoggedIn()) {
		console.log("Not logged in");
		
		login();
	}
	
	//client.end();
});

function isLoggedIn() {
	client.isExisting(".coreSpriteNavigationBrandSmall");
}

var remainingLoginTries = 3;
function login() {
	console.log("Try to login");
	
	if(--remainingLoginTries == 0) {
		console.log("Too many login tries!");
		return;
	}
	
	client
		.click("a[data-reactid='.0.1.0.1.1.0.1']")
		.tdhen(function() {
			console.log("Wait until client is logged in");
			
			client
				.waitForExist(".coreSpriteNavigationBrandSmall", 5000)
				.then(function() {
					if(!isLoggedIn()) {
						console.log("Not yet logged in");
						login();
					}
				});
		});
}

setInterval(function() {}, 100000);