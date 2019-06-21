app.controller("moviesCtrl", function ($scope, $http, $log, movies, $location) {
  
    $scope.movies = [];

    movies.getMovies().then(function (movies) {
        $scope.movies = movies;
    }, function (err) {
        $log.error(err);
    })


    // updating search results using TMDB
    $scope.movieUserQuery = "";
    $scope.updateSearchResults = function () {
        if ($scope.movieUserQuery) {

            var searchUrl = "https://api.themoviedb.org/3/search/movie?api_key="
                + movies.API_KEY + "&query=" + $scope.movieUserQuery;

            $http.get(searchUrl).then(function (res) {
                $scope.searchResults = res.data.results;
            }, function (err) {
                console.error(err);
            })
        } else {
            $scope.searchResults = [];  // creating a new empty array
        }
    }


    $scope.addMovie = function (searchResult) {
        var movieDetailsUrl = "https://api.themoviedb.org/3/movie/" +
            searchResult.id + "?api_key=" + movies.API_KEY + "&append_to_response=credits";

        $http.get(movieDetailsUrl).then(function (res) {
            var starsCast = [];
            for (var i=0; res.data.credits.cast && i <= 2; i++) {
                starsCast.push(res.data.credits.cast[i].name);
            }

            var director = "";
            res.data.credits.crew.forEach(function(entry){
                if (entry.job == 'Director') {
                    director = entry.name;
                }
            });
            
            var movie = new movies.Movie(
                res.data.title,
                res.data.release_date,
                res.data.runtime,
                res.data.poster_path,
                starsCast,
                director);

            $scope.movies.push(movie);

        }, function (err) {
            console.error(err);
        })

        // clear search box
        $scope.movieUserQuery = "";
        $scope.searchResults = [];

    };

    $scope.openMovieDetails = function (movie) {

        var index = $scope.movies.indexOf(movie);
        $location.path("/movies/" + index);
    }


});

