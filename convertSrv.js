app.factory("convert", function () {

    function convertMinToHours(min) {
        var hours = Math.floor(min / 60);
        var minutes = min % 60;
        var minInHours = hours + "h " + minutes + "min";
        return minInHours;
    }

    function getAge(birthday) {
        var bday = new Date(birthday);
        var today = new Date();
        var yearNow = today.getFullYear();
        var yearBday = bday.getFullYear();
        var age = yearNow - yearBday;

        return age;
    }

    return {
        convertMinToHours: convertMinToHours,
        getAge : getAge
    };

});