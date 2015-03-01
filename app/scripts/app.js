 /*global app:true*/
 /*exported app*/

'use strict';

/**
 * @ngdoc overview
 * @name tasklistApp
 * @description
 * # tasklistApp
 *
 * Main module of the application.
 */

var app=angular
  .module('tasklistApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])


  .constant('FIREBASE_URL', 'https://flickering-inferno-2348.firebaseio.com/')

    .config(function ($routeProvider) {
    $routeProvider
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })

      .when('/expired-tasks/', {
        templateUrl: 'views/expired-tasks.html',
        controller: 'ExpiredTasksCtrl'
      })
      .otherwise({
        redirectTo: '/tasks'
      });
  });
