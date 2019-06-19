
app.controller("homeCtrl", function($scope, $location) {
  
  $scope.enterApp = function() {
    $location.path("/actors");
  }
   
});