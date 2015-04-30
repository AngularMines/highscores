angular.module('hiScoreApp', [])
  .controller('HiScoreCtrl', ['$scope', '$http', function($scope, $http){
    $scope.scores = [];

    function loadHiScores(){
      $http.get('/scores').success(function(data){
        $scope.scores = data;
      });
    }

    // $scope.scores = [{name: "Harriet", time: 50, createdAt: new Date().getTime()-1000000},{name: "Piet", time: 100, createdAt: new Date().getTime()}]
    $scope.predicate = '-time';
    loadHiScores();
  }])
