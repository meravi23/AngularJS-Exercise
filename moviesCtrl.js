app.controller("moviesCtrl", function ($scope, $http) {

    function Movie(title, releaseDate, length, poster, stars, director) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.length = length;
        this.poster = poster;
        this.stars = stars;
        this.director = director;
    }

    Movie.prototype.starsToString = function () {
        var allStars = this.stars.join(", ");
        return allStars;
    }


    // $scope.movie.stars = ["Christian Slater", "Samantha Mathis", "Anthony Lucero"];

    $scope.movies = [];

    var movie = new Movie("Pump Up the Volume",
        "1990-12-22",
        "102",
        "https://m.media-amazon.com/images/M/MV5BNzY2OTkzNzUyNl5BMl5BanBnXkFtZTgwNTY1NTk4NjE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        ["Cristian Slater", "Samantha Mathis", "Anthony Lucero"],
        "Allan Moyle");
    $scope.movies.push(movie);


    //    Adding Movies (from TMDB key  0ddbf460202c4472e408048059e3a16d)

    $scope.addMovie = function (searchResult) {
        var movieDetailsUrl =  "https://api.themoviedb.org/3/movie/" +
        movieResult.id +
        "?api_key=0ddbf460202c4472e408048059e3a16d&language=en-US";

        var getCredits = "https://api.themoviedb.org/3/movie/" +
         movieResult.id +
         "/credits?api_key=0ddbf460202c4472e408048059e3a16d";
        
        
        $http.get(movieDetailsUrl).then(function(res) {
            var movie =  new Movie(res.data.title,
                 res.data.release_date,
                 res.data.runtime,
                 res.data.)
        }
        
    };

    //Adding Actor (getting details from TMDB)
      $scope.addActor = function(searchResult) {
        var actorDetailsUrl = "https://api.themoviedb.org/3/person/" + 
          searchResult.id +"?api_key=53d2ee2137cf3228aefae083c8158855";

        $http.get(actorDetailsUrl).then(function(res) {
          var actor = new Actor(res.data.name,
            res.data.profile_path, 
            res.data.birthday,
            res.data.imdb_id);

          $scope.favoriteActors.push(actor);
        }, function(err) {
          console.error(err);
        });

});