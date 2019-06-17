app.factory("actors", function ($log, $http, convert, $q) {

    //**** Business Logic ****

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

    Actor.prototype.getAge = function () {
        return convert.getAge(this.birthday);
    }

    var actors = [];

    function getActors() {
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