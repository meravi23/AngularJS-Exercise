app.controller("actorsCtrl", function($scope) {
    //$scope.test = "blabla";
    //**** Business Logic - eventually to be moved to service ****

    function Actor(fname, lname, image, birthday, imdbLink) {
        this.fname = fname;
        this.lname = lname;
        this.image = image;
        this.birthday = birthday;
        this.imdbLink = imdbLink;
    }

    Actor.prototype.getFullName = function() {
        var fullName = this.fname + " " + this.lname;
        return fullName;
    }

    // load 6 actors
    $scope.actors = [];
    $scope.actors.push(new Actor("Helen", "Mirren", "https://m.media-amazon.com/images/M/MV5BMjA4MzY2ODU2MV5BMl5BanBnXkFtZTcwOTQ3ODY4OQ@@._V1_SY1000_CR0,0,789,1000_AL_.jpg", "1945-07-26", "https://www.imdb.com/name/nm0000545"));
    $scope.actors.push(new Actor("Clint", "Eastwood", "https://m.media-amazon.com/images/M/MV5BMTg3MDc0MjY0OV5BMl5BanBnXkFtZTcwNzU1MDAxOA@@._V1_SY1000_CR0,0,740,1000_AL_.jpg", "1930-05-31", "https://www.imdb.com/name/nm0000142"));
    $scope.actors.push(new Actor("Morgan", "Freeman", "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_.jpg", "1937-06-01", "https://www.imdb.com/name/nm0000151"));
    $scope.actors.push(new Actor("Tim", "Robbins", "https://m.media-amazon.com/images/M/MV5BMTI1OTYxNzAxOF5BMl5BanBnXkFtZTYwNTE5ODI4._V1_.jpg", "1958-10-16", "https://www.imdb.com/name/nm0000209"));
    $scope.actors.push(new Actor("Christian", "Slater", "https://m.media-amazon.com/images/M/MV5BMTY5ODA1ODY2Nl5BMl5BanBnXkFtZTgwNjcwNDczNzE@._V1_SY1000_CR0,0,664,1000_AL_.jpg", "1969-08-18", "https://www.imdb.com/name/nm0000225"));
    $scope.actors.push(new Actor("Charlize", "Theron", "https://m.media-amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_.jpg", "1975-08-07", "https://www.imdb.com/name/nm0000234"));

    console.log($scope.actors);

    //**** Presentation Logic ****/
    // $scope.addActor = function() {
    //     var actor = new Actor("Clint", "Eastwood", "gfsdf.jpg", "1940-4-5", "https://www.imdb.com/name/nm0000645");
    //     $scope.actors.push(actor);
    // }

    $scope.query = "";

    $scope.filterActor = function(actor) {
        if (!$scope.query) {
            return true;
        }

        if (actor.fname.toLowerCase().includes($scope.query.toLowerCase()) || actor.lname.toLowerCase().includes($scope.query.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }


});