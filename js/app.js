// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','starter.home'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  //$urlRouterProvider

  //angualrUI设置路由
  $stateProvider
  .state('home', {
    url: '/home',
    views: {
      'home': {
         templateUrl: 'templates/home/home.html',
         controller: 'homeCtrl'
      }
    }
  })
    .state('sale', {
      url: '/sale',
      views: {
        'sale': {
           templateUrl: 'templates/sale/sale.html',
          // controller: 'DashCtrl'
        }
      }
    })
    .state('mall', {
      url: '/mall',
      views: {
        'mall': {
           templateUrl: 'templates/mall/mall.html',
          // controller: 'DashCtrl'
        }
      }
    })
    .state('find', {
      url: '/find',
      views: {
        'find': {
           templateUrl: 'templates/find/find.html',
          // controller: 'DashCtrl'
        }
      }
    })
    .state('me', {
      url: '/me',
      views: {
        'me': {
           templateUrl: 'templates/me/me.html',
          // controller: 'DashCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  //对于angularUI路由  如果设置其他情况还要使用angular路由
  $urlRouterProvider.otherwise('/home');

});
