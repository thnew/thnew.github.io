function NewController($scope) {
    var SOURCES = {
      FACEBOOK: "FACEBOOK",
      GOOGLE: "GOOGLE",
      TWITTER: "TWITTER",
      LINKEDIN: "LINKEDIN",
      MAIL: "MAIL",
      PHONE: "PHONE",
    };

    $scope.members = [
      {
        name: "Richtiger Kevin",
        source: SOURCES.FACEBOOK,
        button: "DELETE"
      },
      {
        name: "Michael",
        source: SOURCES.TWITTER,
        button: "DELETE"
      },
      {
        name: "Michael",
        source: SOURCES.TWITTER,
        button: "DELETE"
      }
    ];
    
    $scope.friendSearchResults = [
      {
        id: 99,
        name: "Hans Wurst",
        source: SOURCES.FACEBOOK,
        button: "SELECT"
      },
      {
        id: 100,
        name: "Nina Hagen",
        source: SOURCES.TWITTER,
        button: "SELECT"
      }
    ];

    $scope.search = {
      text: ""
    };

    $scope.newEvent = {
        title: "",
        image: "",
        place: "",
        duration: ""
    };

    $scope.addMember = function(user, searchName) {
      for(var f in $scope.friendSearchResults)
      {
        if($scope.friendSearchResults[f].id == user.id)
        {
          $scope.friendSearchResults.splice(f, 1);
          break;
        }
      }

      user.button = "DELETE";
      $scope.members.push(user);

      $scope.search.text = ""; // DOES NOT WORK YET
    };
    
    $scope.removeUser = function(index) {
        $scope.members.splice(index, 1);
    };
    
    $scope.step = 2;
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