function NewController($scope) {
    $scope.step = 1;

    $scope.members = [];

    $scope.newEvent = {
        title: "",
        image: "",
        place: "",
        duration: ""
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
          window.location.href = "#/tab/event/vote";
        }
        else
        {
            $scope.previousStep();
        }
    };

    $scope.isValid = function() {
      switch($scope.step)
      {
        case 1:
          if($scope.newEvent.title.trim().length <= 0)
            {
              return false;
            }
          break;
        case 2:
          if($scope.members.length <= 0)
          {
            return false;
          }
      }

      return true;
    };
};