var IS_SERVER = (typeof(module) != "undefined");

if(IS_SERVER)
{
  var Domain = require('./Domain');
  var BASE_URLS = require('../config/BASE_URLS');
}

function Event(attr) {
  if(attr.title == null || attr.title.length == 0) throw "Error creating new User object: Attribute title is missing";
  if(attr.location == null) throw "Error creating new User object: Attribute location is missing";
  if(attr.duration == null) throw "Error creating new User object: Attribute duration is missing";
  if(attr.state == null) throw "Error creating new User object: Attribute state is missing";
  
  if(attr.isNew !== true)
  {
    if(attr.id == null) throw "Error creating new User object: Attribute id is missing";
    
    this.id = attr.id;
  }
  
  this.title = attr.title;
  this.description = attr.description;
  this.image = attr.image;
  this.location = attr.location;
  this.duration = attr.duration;
  this.state = attr.state;

  this.toDTO = function() {
    return {
      id: attr.id,
      title: attr.title,
      image: BASE_URLS.GET_EVENT_IMAGE_URL(attr.id),
      description: attr.description,
      location: attr.location,
      duration: attr.duration,
      state: attr.state
    }
  };

  this.fromDTO = function(eventDTO) {
    return new Event({
      id: eventDTO.id,
      title: eventDTO.title,
      image: eventDTO.image,
      description: eventDTO.description,
      location: eventDTO.location,
      duration: eventDTO.duration,
      state: eventDTO.state
    });
  };

  return new Domain(this);
};

if(IS_SERVER)
{
  module.exports = Event;
}