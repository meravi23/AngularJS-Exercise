app.factory("movies", function ($log, $http, convert, $q) {

    function Movie(titleOrObject, releaseDate, runtime, poster, stars, director) {
        if (arguments.length > 1) {
            this.titleOrObject = titleOrObject;
            this.releaseDate = releaseDate;
            this.runtime = runtime; // movie's length
            this.poster = "https://image.tmdb.org/t/p/w500" + poster;
            this.stars = stars;
            this.director = director;
        } else {
            this.title = titleOrObject.title;
            this.releaseDate = titleOrObject.releaseDate;
            this.runtime = titleOrObject.runtime; 
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

    
    function getMovies() {
        var movies = [];
        var async = $q.defer();

        $http.get("movies.json").then(function (res) {

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
        Movie : Movie,
        getMovies: getMovies
    }

});