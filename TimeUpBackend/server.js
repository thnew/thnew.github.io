var express = require('express');
var path = require('path');

var Event = require('./domains/Event');
var Logger = require('./helper/Logger');

var app = express();
app.use(express.static(path.join(__dirname, "../TimeUpFrontend/www")));

app.listen(80);

console.log("Server started :)");

app.get("/api/event", function(req, res) {
  Logger.restCall("Events.");
  
  var eventsToReturn = [];

  var events = Event.getAll();

  for(var f in events)
  {
    eventsToReturn.push(events[f].toDTO());
  }

  var returnMe = new SuccessResponse(eventsToReturn);
  
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

/*Response Interface*/ {
  var Response = function(success, data, error){
    this.success = success;
    this.data = data;
    this.error = error;
  };

  Response.prototype = {
    success:  false,
    error:    null,
    data:   null
  };

  var SuccessResponse = function(data, furtherRootParams){
    var response = new Response(true, data, null);
    
    for(var f in (furtherRootParams || {}))
    {
      response[f] = furtherRootParams[f];
    }
    
    return response;
  };

  var ErrorResponse = function(message, notLoggedIn, stack){
    var response = new Response(false, null, message);
    response.notLoggedIn = notLoggedIn;
    
    console.log(("\tError occured and responded: " + message).error);
    logger.error(message, stack);
    
    return response;
  };
  
  function sendErrorResponse(res, exception) {
    res.json(200, new ErrorResponse(exception + "", exception.notLoggedIn || false, exception.stack));
  }
}

var NotLoggedInException = function(){
  this.message = "Not logged in!";
  this.notLoggedIn = true;
};