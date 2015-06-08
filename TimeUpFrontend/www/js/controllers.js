angular.module('starter.controllers', [])
  .controller('EventsController', EventsController)


  .controller('DashCtrl', function($scope) {})

  .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    }
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('NewCtrl', function($scope) {
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
  });
