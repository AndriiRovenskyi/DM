app.factory('LanguageService', function ($http) {
    var x;
    return {
        getUA:function () {
            return $http({
                url: "/js/dataLanguage/UA.json",
                method: "GET"
            })
        },
        getPL:function () {
            return $http({
                url: "/js/dataLanguage/PL.json",
                method: "GET"
            })
        },
        getEN:function () {
            return $http({
                url: "/js/dataLanguage/EN.json",
                method: "GET"
            })
        }

    }})