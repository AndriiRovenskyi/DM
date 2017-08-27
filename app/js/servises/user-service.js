app.factory('UserService', ['$http', function ($http, $state, $rootScope) {
    return {

        getNews: function() {
        return $http({
            url: url+ "/news/get",
            method: "GET"
        });
    },
        getNewsById: function (id) {
            return $http({
                url: url+ "/news/getone/" + id,
                method: "GET"
            })
        },


        getSubCategoriesById: function (id) {
            return $http({
                url: url+ "/subCategory/getone/" + id,
                method: "GET"
            })
        },
        getProduct: function () {
            return $http({
                url: url+ "/commodity/get",
                method: "GET"
            })
        },
        getPoductById: function (id) {
            return $http({
                url: url + "/commodities/getone/" + id,
                method: "GET"
            })
        }




}


}]);

var url = "http://185.65.246.204:8081"
