app.controller("actorsCtrl", function($scope) {
    //$scope.test = "blabla";
    function Actor(fname, lname, image, birthday, imdbLink) {
        this.fname = fname;
        this.lname = lname;
        this.image = image;
        this.birthday = birthday;
        this.imdbLink = imdbLink;
    }

});