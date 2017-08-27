app.factory('AdminService', ['$http','$state','$rootScope', function ($http, $state, $rootScope) {
    return {

        checkAdmin: function () {
            if (localStorage.getItem('admin') != 'true') {
                $state.go('login');
            }
        },
        checkLogin: function (username, password) {
            $http({
                url: "http://185.65.246.204:8081/signIn",
                method: "POST",
                data: { login: username, password:password}
            }).then(function (data) {
                if(data.data) {
                    sessionStorage.setItem("token", data.data.token);
                    $state.go("admin");
                }else
                    alert("Wrong password");
            })
        },

// SUBCATEGORIES
        getSubcategories: function () {
            return $http({
                url: "http://185.65.246.204:8081/subCategory/get",
                method: "GET",
            })
        },
        changeSubcategory: function (subcategory) {
            return $http({
                url: "http://185.65.246.204:8081/subCategory/update",
                method: "PUT",
                data: subcategory
            })
        }, deleteSubcategory: function (id) {
            return $http({
                url: "http://185.65.246.204:8081/subCategory/delete/" + id,
                method: "DELETE"
            })
        },

        addSubcategory: function (subcategory) {
            return $http({
                url: "http://185.65.246.204:8081/subCategory/add",
                method: "POST",
                data: subcategory,
                headers: sessionStorage.getItem("token")
            })
        },

// PRODUCT

        getProduct: function () {
            return $http({
                url: "http://185.65.246.204:8081/commodity/get",
                method: "GET"
            })
        },
        changeProduct: function (product) {
            for (i in products) {
                if (products[i].id == product.id) {
                    products.splice(i, 1, product)
                }
            }
        },
        deleteProduct: function (product) {
            return $http({
                url: "http://185.65.246.204:8081/commodity/delete/" + product.id,
                method: "DELETE"
            })
        },
        addProduct: function (product) {
            return $http({
                url: "http://185.65.246.204:8081/commodity/add",
                method: "POST",
                data: product
            })
        },




// NEWS

        addNewies: function (news) {
            return $http({
                url: "http://185.65.246.204:8081/news/add",
                method: "POST",
                data: news
            });
        },
    getNewies:function() {
        return $http({
            url: "http://185.65.246.204:8081/news/get",
            method: "GET"
        });
    }
    ,
    changeNewies:function(news) {

        return $http({
            url: "http://185.65.246.204:8081/news/update",
            method: "PUT",
            data: news
        })
    }
    ,
    deleteNewies:function(id) {
        return $http({
            url: "http://185.65.246.204:8081/news/delete/" + id,
            method: "DELETE"
        });
    },


        getCategories: function () {
            return categories;
        }

    }


}]);

var users = [{
    name: 'admin',
    password: 'admin'
}];

var categories = [{
    name: 'Каміни',
    id: 1
}, {
    name: 'Скульптури',
    id: 3
}, {
    name: 'Архітектура',
    id: 2
}]
