var jasmine = require('jasmine-node')
global.angular = require('angular-node')
require('angular-mocks-node')

require('../js/controllers.js')

describe('something', function() {
  var $controller, $http, hiScoreCtrl, $scope

  beforeEach(angular.mock.module('hiScoreApp'))
  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_
    $scope = {}
    $http = {
      get: function() {
        return {
          success: function(callback) {
            callback([{name: "Harriet", time: 50, createdAt: new Date().getTime()-1000000},{name: "Piet", time: 100, createdAt: new Date().getTime()}])
          }
        }
      }
    }

    hiScoreCtrl = $controller('HiScoreCtrl', {$scope: $scope, $http: $http})
  }))

  it('initializes scores', function() {
    expect($scope.scores.length).toBe(2)
  });


  it('should set a default value of the predicate model', function() {
    expect($scope.predicate).toBe('time')
  });
})

