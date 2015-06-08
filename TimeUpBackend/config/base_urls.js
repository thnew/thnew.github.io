var BASE_URLS = {
  GET_EVENT_IMAGE_URL: function (eventId) {
    if(eventId == null) return "GIBTS NICHT";

    return "/api/event/" + eventId + "/image";
  }
};

module.exports = BASE_URLS;