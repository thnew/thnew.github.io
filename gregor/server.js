/*Using Notepad++? Press Alt + 2 to get a better overview*/

console.log("\n\n\n### SERVER ######################");
console.log("Gonna load all modules and initialize them now...");

// Common libraries
	var express = require('express');
	
/* Final attributes */ {
	var _PORT = process.env.PORT || 80;
}

var app = express();

app.configure(function() {
	// This is the path for all static files like images, css files, etc.
	app.use(express.static(__dirname + '/www'));
});

// Server start
app.listen(_PORT);

console.log("Server started. Listening on Port " + _PORT);
console.log();