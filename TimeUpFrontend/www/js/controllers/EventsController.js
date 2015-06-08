function EventsController($scope, Models, Events) {
  //$scope.SUPER = $scope.$parent;
  
  $scope.events = [];
  
  Events.getAll(function(resp) {
    $scope.events = resp.data;
  });

  $scope.EVENT_STATUS = {};
  Models.enums.getEventStatus(function(EVENT_STATUS) {
    $scope.EVENT_STATUS = EVENT_STATUS;
  });

  $scope.eventItemStateToCss = function(state) {
    switch(state)
    {
      case $scope.EVENT_STATUS.NO_VOTE_YET:
        return "event-item-todo";
      case $scope.EVENT_STATUS.NOT_ALL_VOTES_YET:
        return "event-item-in-progress";
    }
  };
};