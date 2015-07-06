/* Include all modules */ {
  var express = require('express');
  var path = require('path');
  var bodyParser = require("body-parser");

  // Include all rest-inerfaces
  var restInterfaces = {
    event: require('./rest/event')
  };
}

/* Get start parmeters */ {
  if(process.argv.indexOf("dev") != -1)
  {
    var DEV = true;
  }
}

/* Config and start server */ {
	var app = express();

	app.use(bodyParser.json({ limit: "50mb" }));

	app.use(express.static(path.join(__dirname, "../TimeUpFrontend/www")));
  app.use("/shared", express.static(path.join(__dirname, "../TimeUpShared")));
	
  if(DEV)
  {
    app.use("/test", express.static(path.join(__dirname, "../TimeUpTests")));
  }
	app.listen(80);

	console.log("Server started :)");
}

// Initialize all rest-interfaces
for(var f in restInterfaces)
{
  restInterfaces[f].init(app);
}