var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
  $scope.first = 'Some';
  $scope.last = 'One';
  $scope.heading = 'Message: ';
  $scope.updateMessage = function() {
    $scope.first = $scope.first.toUpperCase();
    $scope.last = $scope.last.toUpperCase();
    $scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
  };
});
