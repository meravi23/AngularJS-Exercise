app.factory("movies", function ($log, $http, convert, $q) {

    function Movie(title, releaseDate, length, poster, stars, director) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.length = length; // movie length
        this.poster = poster;
        this.stars = stars;
        this.director = director;
    }

    Movie.prototype.starsToString = function () {
        var allStars = this.stars.join(", ");
        return allStars;
    }

    Movie.prototype.convertMinToHours = function () {
        return convert.convertMinToHours(this.length);
    }

    var movies = [];
    function getMovies() {
        var async = $q.defer();

        $http.get("movies.json").then(function(res) {
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
        getMovies : getMovies
    }

});