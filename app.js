var app = angular.module("actorsApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider.
        when("/", {
            templateUrl: "home.html",
            controller: "homeCtrl"
        }).when("/actors", {
            templateUrl: "actors.html",
            controller: "actorsCtrl"
        }).when("/movies", {
            templateUrl: "movies.html",
            controller: "moviesCtrl"
        }).when("/movies/:id", {
            templateUrl: "movieDetails.html",
            controller: "movieDetailsCtrl"
        });
});
