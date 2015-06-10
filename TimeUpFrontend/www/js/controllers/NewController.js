function NewController($scope, $http, Events) {
  $scope.step = 1;

  $scope.members = [];

  $scope.newEvent = {
    title:      "",
    image:        "",
    place:      "",
    duration:   ""
  };
  
  $scope.removeMember = function(index) {
    $scope.members.splice(index, 1);
  };
  
  $scope.step = 1;
  $scope.finalStepNr = 4;
  $scope.nextStep = function() {
    // Check for errors
    
    // Increment step
    $scope.step++;
    
    // If last step, validate event and save
    if($scope.step == $scope.finalStepNr)
    {
        $scope.newEvent.isNew = true;
        var event = new Events.model($scope.newEvent);
        Events.save();
    }
  };
  
  $scope.previousStep = function() {
    $scope.step--;
  };
  
  $scope.back = function() {
    if($scope.step <= 1 || $scope.step == $scope.finalStepNr)
    {
        window.history.back();
    }
    else
    {
        $scope.previousStep();
    }
  };

  $scope.save = function() {
    /*DELETE THIS*/ {
      $scope.newEvent.id = "dfd";
      $scope.newEvent.location = "dfd";
      $scope.newEvent.state = "dfd";
    }

    Events.save($scope.newEvent, function(resp) {
      alert("yayy");
    });
  };
};