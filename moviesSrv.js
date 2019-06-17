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


    return {
    }

});