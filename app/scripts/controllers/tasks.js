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

 

  $scope.completeTask = Task.completeTask;
  



  $scope.workTask = Task.workTask;


  

$scope.priorityOptions=[
  {name:'High',id:1},
  {name:'Medium',id:2},
  {name:'Low',id:3}
  ];

$scope.selectedPriority=$scope.priorityOptions[2].id;

$scope.statusOptions=[
{name:'Click to Complete',id:0}
];

$scope.selectedStatus=$scope.statusOptions[0].id;

  $scope.task={todo:'', priority:$scope.selectedPriority,isComplete:false,status:0};

  $scope.addTask=function(){
    $scope.task.createdAt = new Date().getTime();
    Task.create($scope.task).then(function(){
      
      $scope.task={todo:'',priority:$scope.selectedPriority,isComplete:false,status:0};
    });
    };

$scope.selectedPriority=$scope.priorityOptions[2].id;

$scope.selectedStatus=$scope.statusOptions[0].id;




  $scope.deleteTask=function(task){
    Task.delete(task)

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
