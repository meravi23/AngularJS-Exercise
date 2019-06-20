app.controller("navCtrl", function ($scope) {

    $scope.links = ["Actors", "Movies"];

    $scope.selectedLink = null;
    $scope.onSelectLink = function (link) {
        if ($scope.selectedLink === link) {
            $scope.selectedLink = null;
        } else {
            $scope.selectedLink = link;
        }
    }

});