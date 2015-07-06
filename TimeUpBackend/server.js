/* Include all modules */ {
  var express = require('express');
  var path = require('path');
  var bodyParser = require("body-parser");

  // Include all rest-inerfaces
  var restInterfaces = {
    event: require('./rest/event')
  };
}

/* Config and start server */ {
	var app = express();

	app.use(bodyParser.json({ limit: "50mb" }));

	app.use(express.static(path.join(__dirname, "../TimeUpFrontend/www")));
	app.use("/shared", express.static(path.join(__dirname, "../TimeUpShared")));

	app.listen(80);

	console.log("Server started :)");
}

// Initialize all rest-interfaces
for(var f in restInterfaces)
{
  restInterfaces[f].init(app);
}