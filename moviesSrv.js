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
        

        $http.get("https://api.themoviedb.org/3/movie/550?api_key=0ddbf460202c4472e408048059e3a16d&callback=test").then(function (res) {

        for (var i = 0; i < res.data.results.length; i++) {
                var movie = new Movie(res.data.results[i]);
                movies.push(movie);
            }

            async.resolve(movies);
        }, function (err) {
            $log.error(err);
            async.reject(err);
        });

        return async.promise;
    }


    // Returning (with a promise) a single movie by its index in the array
    function getMovieByIndex(index) {
        var async = $q.defer();

        // Getting all the movies and returning a single movie by its index in the array
        getMovies().then(function (movies) {
            if (index >= movies.length) {
                async.reject("Index out of bounds")
            }

            async.resolve(movies[index]);
        }, function (err) {
            async.reject(err);
        })

        return async.promise;
    }

    return {
        Movie: Movie,
        getMovies: getMovies,
        getMovieByIndex : getMovieByIndex
    }

});