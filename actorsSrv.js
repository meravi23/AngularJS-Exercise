app.factory("actors", function ($log, $http, convert, $q) {

    //**** Business Logic ****

    // Creating one constructor for 2 cases: 
    // (1) sending 5 arguments (all the properties)
    // (2) sending 1 argument - an object containing all properties

    function Actor(fnameOrObject, lname, image, birthday, imdbLink) {
        if (arguments.length > 1) {
            this.fname = fnameOrObject;
            this.lname = lname;
            this.image = image;
            this.birthday = birthday;
            this.imdbLink = imdbLink;
        } else {
            this.fname = fnameOrObject.fname;
            this.lname = fnameOrObject.lname;
            this.image = fnameOrObject.image;
            this.birthday = fnameOrObject.birthday;
            this.imdbLink = fnameOrObject.imdbLink;
        }
    }

    Actor.prototype.getFullName = function () {
        var fullName = this.fname + " " + this.lname;
        return fullName;
    }

    Actor.prototype.getAge = function () {
        return convert.getAge(this.birthday);
    }

    function getActors() {
        var actors = [];

        var async = $q.defer();

        $http.get("actors.json").then(function (res) {
            // on success
            for (var i = 0; i < res.data.length; i++) {
                var actor = new Actor(res.data[i]);
                actors.push(actor);
            }
            // actors are ready - promise can be resolved
            async.resolve(actors);
        }, function (err) {
            $log.error(err);
            async.reject(err);
        });

        return async.promise;
    }


    return {
        getActors: getActors
    }

    //**** Presentation Logic ****/
    // $scope.addActor = function() {
    //     var actor = new Actor("Clint", "Eastwood", "gfsdf.jpg", "1940-4-5", "https://www.imdb.com/name/nm0000645");
    //     $scope.actors.push(actor);
    // }
});