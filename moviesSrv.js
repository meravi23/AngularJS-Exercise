app.factory("movies", function ($log, $http, convert, $q) {

    function Movie(titleOrObject, releaseDate, runtime, poster, stars, director) {
        if (arguments.length > 1) {
            this.titleOrObject = title;
            this.releaseDate = releaseDate;
            this.runtime = runtime; // movie length
            this.poster = poster;
            this.stars = stars;
            this.director = director;
        } else {
            this.title = titleOrObject.title;
            this.releaseDate = titleOrObject.releaseDate;
            this.runtime = titleOrObject.runtime; // movie length
            this.poster = titleOrObject.poster;
            this.stars = titleOrObject.stars;
            this.director = titleOrObject.director;
        }
    }

    Movie.prototype.starsToString = function () {
        var allStars = this.stars.join(", ");
        return allStars;
    }

    Movie.prototype.convertMinToHours = function () {
        return convert.convertMinToHours(this.runtime);
    }

    var movies = [];
    function getMovies() {
        var async = $q.defer();

        $http.get("movies.json").then(function (res) {
            // on success
            for (var i = 0; i < res.data.length; i++) {
                var movie = new Movie(res.data[i]);
                movies.push(movie);
            }

            async.resolve(movies);
        }, function (err) {
            $log.error(err);
            async.reject(err);
        });

        return async.promise;
    }

    return {
        getMovies: getMovies
    }

});