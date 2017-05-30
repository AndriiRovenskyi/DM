app.factory('UserService', ['$http', function ($http, $state, $rootScope) {
    return {

        getNews: function() {
        return $http({
            url: "http://185.65.246.204:8081/news/get",
            method: "GET"
        });
    },
        getNewsById: function (id) {
            return $http({
                url: "http://185.65.246.204:8081/news/getone/" + id,
                method: "GET"
            })
        },


        getSubCategoriesById: function (id) {
            return $http({
                url: "http://185.65.246.204:8081/subCategory/getone/" + id,
                method: "GET"
            })
        },
        getProduct: function () {
            return $http({
                url: "http://185.65.246.204:8081/commodity/get",
                method: "GET"
            })
        },
        getPoductById: function (id) {
            return $http({
                url: "http://185.65.246.204:8081/commodities/getone/" + id,
                method: "GET"
            })
        }




}


}]);

