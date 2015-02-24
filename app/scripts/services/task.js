'use strict';

app.factory('Task',function($firebase, FIREBASE_URL){
  var ref=new Firebase(FIREBASE_URL);
  var tasks=$firebase(ref.child('tasks')).$asArray();


  var Task={
    all:tasks,
    create:function(task){
      return tasks.$add(task);
    },



    get: function(taskId){
      return $firebase(ref.child('tasks').child(taskId)).$asObject();
    },
    delete: function(task){
      return tasks.$remove(task);
    }


  };
  return Task;
});
