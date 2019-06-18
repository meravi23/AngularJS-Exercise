app.controller("actorsCtrl", function ($scope, $http, convert, actors) {
    //$scope.test = "blabla";

    actors.getActors().then(function(actors) {
        $scope.actors = actors;
      }, function(err) {
        $log.error(err);
      })

    $scope.query = "";
    $scope.filterActor = function (actor) {
        if (!$scope.query) {
            return true;
        }

        if (actor.fname.toLowerCase().startsWith($scope.query.toLowerCase()) ||
         actor.lname.toLowerCase().startsWith($scope.query.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    };

    $scope.selectedActor = null;
    $scope.onSelectActor = function (actor) {
        if ($scope.selectedActor === actor) {
            $scope.selectedActor = null;
        } else {
            $scope.selectedActor = actor;
        }
    }

    $scope.orderProperty = "";
    $scope.orderByProperty = function (propertyName) {

        $scope.orderProperty = propertyName;

    };

    

});