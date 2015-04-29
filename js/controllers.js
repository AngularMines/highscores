angular.module('hiScoreApp', [])
  .controller('HiScoreCtrl', ['$scope', '$http', function($scope, $http){
    $scope.scores = [];

    function loadHiScores(){
      $http.get('/scores').success(function(data){
        $scope.scores = data;
      });
    }
    loadHiScores();
  }])
