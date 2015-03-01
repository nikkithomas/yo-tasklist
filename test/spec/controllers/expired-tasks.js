'use strict';

describe('Controller: ExpiredTasksCtrl', function () {

  // load the controller's module
  beforeEach(module('tasklistApp'));

  var ExpiredTasksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpiredTasksCtrl = $controller('ExpiredTasksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
