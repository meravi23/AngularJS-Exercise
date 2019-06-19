app.controller("movieDetailsCtrl", function ($scope, $log, movies, $routeParams) {

    movies.getMovieByIndex($routeParams.id).then(function (movie) {
        $scope.movie = movie;
    }, function (err) {
        $log.error(err);
    });


});