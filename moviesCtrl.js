app.controller("moviesCtrl", function ($scope, $http, convert) {

    // $scope.movie.stars = ["Christian Slater", "Samantha Mathis", "Anthony Lucero"];

    $scope.movies = [];
    var movie = new Movie("Pump Up the Volume",
        "1990-12-22",
        "102",
        "https://m.media-amazon.com/images/M/MV5BNzY2OTkzNzUyNl5BMl5BanBnXkFtZTgwNTY1NTk4NjE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        ["Cristian Slater", "Samantha Mathis", "Anthony Lucero"],
        "Allan Moyle");

    var movie2 = new Movie("A Few Good Men",
        "1992-12-09",
        "138",
        "https://m.media-amazon.com/images/M/MV5BNzY2OTkzNzUyNl5BMl5BanBnXkFtZTgwNTY1NTk4NjE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
        ["Cristian Slater", "Samantha Mathis", "Anthony Lucero"],
        "Rob Reiner");
    $scope.movies.push(movie);
    $scope.movies.push(movie2);

});

    // function getMovies() {
    //     $http.get("mo.json").then(function (res) {
    //         // on success
    //         for (var i = 0; i < res.data.length; i++) {
    //             var car = new Car(res.data[i]);
    //             cars.push(car);
    //         }
    //         // cars are ready - I can resolve the promise
    //         async.resolve(cars);
    //     }, function (err) {
    //         $log.error(err);
    //         async.reject(err);
    //     });

    //     return async.promise;
    // }

    //    Adding Movies (from TMDB key  0ddbf460202c4472e408048059e3a16d)
    //first add search box and get user's choice (id)


    // $scope.addMovie = function (searchResult) {
    //     var movieDetailsUrl = "https://api.themoviedb.org/3/movie/" +
    //         movieResult.id +
    //         "?api_key=0ddbf460202c4472e408048059e3a16d&language=en-US&append_to_response=credits";


    //     $http.get(movieDetailsUrl).then(function (res) {
    //         var movie = new Movie(res.data.title,
    //             res.data.release_date,
    //             res.data.runtime,     
    //             ["Tom Cruise", "Demi Moore", "Jack Nicholson"],   add another get function
    //             "Rob Reiner");

    //         $scope.movies.push(movie);

    //     }, function (err) {
    //         console.error(err);
    //     });

    // };

    //Adding Actor (getting details from TMDB)
    //   $scope.addActor = function(searchResult) {
    //     var actorDetailsUrl = "https://api.themoviedb.org/3/person/" + 
    //       searchResult.id +"?api_key=53d2ee2137cf3228aefae083c8158855";

    //     $http.get(actorDetailsUrl).then(function(res) {
    //       var actor = new Actor(res.data.name,
    //         res.data.profile_path, 
    //         res.data.birthday,
    //         res.data.imdb_id);

    //       $scope.favoriteActors.push(actor);
    //     }, function(err) {
    //       console.error(err);
    //     });
