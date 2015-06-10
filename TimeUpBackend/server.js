var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");

var restInterfaces = {
  event: require('./rest/event')
};

var app = express();

app.use(bodyParser.json({ limit: "50mb" }));

app.use(express.static(path.join(__dirname, "../TimeUpFrontend/www")));

app.listen(80);

console.log("Server started :)");

for(var f in restInterfaces)
{
  restInterfaces[f].init(app);
}