'use strict';

/**
 * @ngdoc function
 * @name tasklistApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the tasklistApp
 */
 /* global Firebase */ 

 app.controller('TasksCtrl',function($scope, Task){
  $scope.tasks=Task.all;

  $scope.task={todo:'', priority:''};

  $scope.addTask=function(){
    Task.create($scope.task).then(function(){
      
    $scope.task={todo:'',priority:''};
    });
    };

  $scope.deleteTask=function(task){
    Task.delete(task);
  };

  $scope.taskDone=true;
 

 });
 
//angular.module('tasklistApp')
  //.controller('TasksCtrl',['$scope','$firebase',function($scope,$firebase){
    //var ref=new Firebase('https://flickering-inferno-2348.firebaseio.com/messages');
    //var sync=$firebase(ref);
    //$scope.mesages=sync.$asArray();
    //$scope.messages = $firebase(ref).$asArray();

  //}

//]);

  //('TasksCtrl', function ($scope) {
    //$scope.awesomeThings = [
      //'HTML5 Boilerplate',
      //'AngularJS',
      //'Karma'
    //];

    //$scope.getTasks = function ($firebase) {
      //var ref=new Firebase('https://flickering-inferno-2348.firebaseio.com/');
      //call on firebase
      //$scope.messages = $firebase(ref).$asArray();

      


    //};
  //});
