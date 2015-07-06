var IS_SERVER = (typeof(module) != "undefined");

var EVENT_STATUS = {
  NO_VOTE_YET: "NO_VOTE_YET",
  NOT_ALL_VOTES_YET: "NOT_ALL_VOTES_YET",
  ALL_VOTED: "ALL_VOTED",
  DATE_FIXED: "DATE_FIXED"
};

if(IS_SERVER)
{
  module.exports = EVENT_STATUS;
}