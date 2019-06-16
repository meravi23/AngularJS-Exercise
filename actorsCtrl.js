app.controller("actorsCtrl", function ($scope, $http) {
    //$scope.test = "blabla";
    //**** Business Logic - eventually to be moved to service ****

    function Actor(fname, lname, image, birthday, imdbLink) {
        this.fname = fname;
        this.lname = lname;
        this.image = image;
        this.birthday = birthday;
        this.imdbLink = imdbLink;
    }

    Actor.prototype.getFullName = function () {
        var fullName = this.fname + " " + this.lname;
        return fullName;
    }

    // load 6 actors
    $scope.actors = [];
    $http.get("actors.json").then(function (response) {
        // $scope.actors = response.data;
        for (var i = 0; i < response.data.length; i++) {
            var actor = new Actor(response.data[i].fname, response.data[i].lname, response.data[i].image,
                response.data[i].birthday, response.data[i].imdbLink);
            $scope.actors.push(actor);
        }
    }, function (err) {
        console.error(err);
    });


    //console.log($scope.actors);

    //**** Presentation Logic ****/
    // $scope.addActor = function() {
    //     var actor = new Actor("Clint", "Eastwood", "gfsdf.jpg", "1940-4-5", "https://www.imdb.com/name/nm0000645");
    //     $scope.actors.push(actor);
    // }

    $scope.query = "";
    $scope.filterActor = function (actor) {
        if (!$scope.query) {
            return true;
        }

        if (actor.fname.toLowerCase().startsWith($scope.query.toLowerCase()) || actor.lname.toLowerCase().startsWith($scope.query.toLowerCase())) {
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