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

var NotLoggedInException = function(){
  this.message = "Not logged in!";
  this.notLoggedIn = true;
};

module.exports = {
  SuccessResponse: SuccessResponse,
  sendErrorResponse: sendErrorResponse,
  NotLoggedInException: NotLoggedInException
};