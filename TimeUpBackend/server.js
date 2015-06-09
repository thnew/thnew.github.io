var express = require('express');
var path = require('path');

var Event = require('./domains/Event');
var Logger = require('./helper/Logger');
var RestResponse = require('./helper/RestResponse');

var app = express();
app.use(express.static(path.join(__dirname, "../TimeUpFrontend/www")));

app.listen(80);

console.log("Server started :)");

app.get("/api/models", function(req, res) {
  var models = {
    domains:
    {
      Event: Event.class
    },
    enums: {
      EVENT_STATUS: Event.EVENT_STATUS
    }
  };

  var returnMe = new RestResponse.SuccessResponse(models);
  
  res.json(200, returnMe);
});

app.get("/api/event", function(req, res) {
  Logger.restCall("Events.");
  
  var eventsToReturn = [];

  var events = Event.getAll();

  for(var f in events)
  {
    eventsToReturn.push(events[f].toDTO());
  }

  var returnMe = new RestResponse.SuccessResponse(eventsToReturn);
  
  res.json(200, returnMe);
});

app.get("/api/event/:eventId/image", function(req, res) {
  var eventId = req.params.eventId;

  Logger.restCall("Event image for event '" + eventId + "' called.");

  //res.sendFile();

  var event = Event.get(eventId);

  var buf = new Buffer(event.image, "base64");
  var rawImage = buf;

  res.writeHead(200, {
    "Content-Type": "image/jpeg",
    "Content-Length": buf.length
  });

  res.end(buf);
});