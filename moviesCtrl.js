app.controller("moviesCtrl", function ($scope) {

    function Movie(title, releaseDate, length, poster, stars, director) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.length = length;
        this.poster = poster;
        this.stars = stars;
        this.director = director;
    }

    Movie.prototype.starsToString = function() {
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

});