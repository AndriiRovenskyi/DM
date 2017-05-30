app.factory('LanguageService', function ($http) {
    return {
        getUA:function () {
            $http({
            url:"/UA.json",
            method: "GET",
        }).then(function (data) {
             return data;
            });

    }

    }})