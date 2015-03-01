'use strict';

/**
 * @ngdoc function
 * @name tasklistApp.controller:ExpiredTasksCtrl
 * @description
 * # ExpiredTasksCtrl
 * Controller of the tasklistApp
 */
angular.module('tasklistApp')
  .controller('ExpiredTasksCtrl', function ($scope, Task) {
    $scope.task=Task.get(task.todo);
    $scope.completeTask = Task.get(completeTask);


    //$scope.awesomeThings = [
      //'HTML5 Boilerplate',
      //'AngularJS',
      //'Karma'
    //];
  });
