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
    $scope.actors.push(new Actor("Helen", "Mirren", "https://m.media-amazon.com/images/M/MV5BMjA4MzY2ODU2MV5BMl5BanBnXkFtZTcwOTQ3ODY4OQ@@._V1_SY1000_CR0,0,789,1000_AL_.jpg", "1948-10-25", "https://www.imdb.com/name/nm0000545"));
    $scope.actors.push(new Actor("Helen", "Mirren", "https://m.media-amazon.com/images/M/MV5BMjA4MzY2ODU2MV5BMl5BanBnXkFtZTcwOTQ3ODY4OQ@@._V1_SY1000_CR0,0,789,1000_AL_.jpg", "1948-10-25", "https://www.imdb.com/name/nm0000545"));
    $scope.actors.push(new Actor("Helen", "Mirren", "https://m.media-amazon.com/images/M/MV5BMjA4MzY2ODU2MV5BMl5BanBnXkFtZTcwOTQ3ODY4OQ@@._V1_SY1000_CR0,0,789,1000_AL_.jpg", "1948-10-25", "https://www.imdb.com/name/nm0000545"));
    $scope.actors.push(new Actor("Helen", "Mirren", "https://m.media-amazon.com/images/M/MV5BMjA4MzY2ODU2MV5BMl5BanBnXkFtZTcwOTQ3ODY4OQ@@._V1_SY1000_CR0,0,789,1000_AL_.jpg", "1948-10-25", "https://www.imdb.com/name/nm0000545"));
    $scope.actors.push(new Actor("Helen", "Mirren", "https://m.media-amazon.com/images/M/MV5BMjA4MzY2ODU2MV5BMl5BanBnXkFtZTcwOTQ3ODY4OQ@@._V1_SY1000_CR0,0,789,1000_AL_.jpg", "1948-10-25", "https://www.imdb.com/name/nm0000545"));
    $scope.actors.push(new Actor("Helen", "Mirren", "https://m.media-amazon.com/images/M/MV5BMjA4MzY2ODU2MV5BMl5BanBnXkFtZTcwOTQ3ODY4OQ@@._V1_SY1000_CR0,0,789,1000_AL_.jpg", "1948-10-25", "https://www.imdb.com/name/nm0000545"));

    console.log($scope.actors);

    //**** Presentation Logic ****/
    $scope.addActor = function() {
        var actor = new Actor("Clint", "Eastwood", "gfsdf.jpg", "1940-4-5", "https://www.imdb.com/name/nm0000645");
        $scope.actors.push(actor);
    }


});