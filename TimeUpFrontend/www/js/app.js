// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })
  /*
  .config(['$ionicAppProvider', function($ionicAppProvider) {
    // Identify app
    $ionicAppProvider.identify({
      // The App ID (from apps.ionic.io) for the server
      app_id: '6509c3652764bac1a35bc3df91c3433c84e34965f7c8e681',
      // The public API key all services will use for this app
      api_key: '1c5402f1ca4adcb7a7d1498ab3c8dcce12c5eb722cc1ed61',
      // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
      // gcm_id: 'YOUR_GCM_ID'
    });
  }])
  //*/
  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    	.state('new', {
    		url: '/new',
        templateUrl: 'templates/new.html',
 				controller: 'NewController'
    	})

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })

      // Each tab has its own nav history stack:
      .state('tab.vote', {
        url: '/event/vote',
        views: {
          'tab-event-vote': {
            templateUrl: 'templates/tab-event-vote.html',
            controller: 'EventsController'
          }
        }
      })
      .state('tab.dated', {
        url: '/event/dated',
        views: {
          'tab-event-dated': {
            templateUrl: 'templates/tab-event-dated.html',
            controller: 'DashCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

    .state('tab.finished', {
      url: '/finished',
      views: {
        'tab-finished': {
          templateUrl: 'templates/tab-finished.html',
          controller: 'AccountCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/event/vote');
  });

/*
angular.module('starter').factory("Models", [ "$http", function($http) {
  var Models = this;

  this.domains = {};
  this.enums = {};

  /* Load models from backend * / {
    var _onInit = [];
    var isInitialized = false;
    var executeOnInitialized = function(executeMe) {
      if(isInitialized) executeMe();
      else _onInit.push(executeMe);
    };

    $http.get('/api/models')
      .success(function(resp, status, headers, config) {
        Models.domains = resp.data.domains;
        Models.enums = resp.data.enums;

        // execute all qued functions
        isInitialized = true;
        for(var f in _onInit) _onInit[f]();
      });
  }

  executeOnInitialized(function(){console.log("Models initialized")});

  return {
    domains: {
      getEventDTO: function(callback) {
        executeOnInitialized(function() {
          callback(Models.domains.eventDTO);
        });
      }
    },
    enums: {
      getEventStatus: function(callback) {
        executeOnInitialized(function() {
          callback(Models.enums.EVENT_STATUS);
        });
      }
    }
  };
}]);
//*/

/*Example Usage
Models.domains.getEventDTO(function(eventDTO){
  // Use the eventDTO for what you want
});
*/