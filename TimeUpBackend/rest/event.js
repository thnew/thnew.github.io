var Event = require('../domains/Event');
var Logger = require('../helper/Logger');
var RestResponse = require('../helper/RestResponse');

module.exports.init = function(app) {
  app.get("/api/models", function(req, res) {
    Logger.restCall("POST /api/models");

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
    Logger.restCall("GET /api/event");
    
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

    Logger.restCall("GET /api/event/" + eventId + "/image");

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

  // Save new event
  app.put("/api/event", function(req, res) {
    Logger.restCall("POST /api/event");

    try
    {
      var eventDTO = req.body;

      Event.save(eventDTO);

      var returnMe = new RestResponse.SuccessResponse();
      res.json(200, returnMe);
    }
    catch(e)
    {
      RestResponse.sendErrorResponse(res, e);
    }
  });
};