app.factory('AdminService', ['$http','$state','$rootScope', function ($http, $state, $rootScope) {
    return {

        logOut: function () {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem('admin');
        },
        checkAdmin: function () {
            if (sessionStorage.getItem('admin') != 'true') {
                $state.go('login');
            }
        },
        checkLogin: function (username, password) {
            $http({
                url: url +"/signIn",
                method: "POST",
                data: { login: username, password:password}
            }).then(function (data) {
                if(data.data) {
                    sessionStorage.setItem("token", data.data.token);
                    sessionStorage.setItem('admin','true')
                    $state.go("admin");
                }else
                    alert("Wrong password");
            }).catch(function (err) {
                if(err.status == 401){
                    alert("Будь-ласка авторезуйтесь");
                    $state.go('login')
                }
            })
        },

// SUBCATEGORIES
        getSubcategories: function () {
            return $http({
                url: url +"/subCategory/get",
                method: "GET",
            }).catch(function (err) {
                if(err.status == 401){
                    alert("Будь-ласка авторезуйтесь");
                    $state.go('login')
                }
            })
        },
        changeSubcategory: function (subcategory) {
            return $http({
                url: url +"/subCategory/update",
                method: "PUT",
                data: subcategory
            }).catch(function (err) {
                if(err.status == 401){
                    alert("Будь-ласка авторезуйтесь");
                    $state.go('login')
                }
            })
        }, deleteSubcategory: function (id) {
            return $http({
                url: url +"/subCategory/delete/" + id,
                method: "DELETE"
            }).catch(function (err) {
                if(err.status == 401){
                    alert("Будь-ласка авторезуйтесь");
                    $state.go('login')
                }
            })
        },

        addSubcategory: function (subcategory) {
            return $http({
                url: url +"/subCategory/add",
                method: "POST",
                data: subcategory,
                headers: sessionStorage.getItem("token")
            }).catch(function (err) {
                if(err.status == 401){
                    alert("Будь-ласка авторезуйтесь");
                    $state.go('login')
                }
            })
        },

// PRODUCT

        getProduct: function () {
            return $http({
                url: url +"/commodity/get",
                method: "GET"
            }).catch(function (err) {
                if(err.status == 401){
                    alert("Будь-ласка авторезуйтесь");
                    $state.go('login')
                }
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
                url: url +"/commodity/delete/" + product.id,
                method: "DELETE"
            }).catch(function (err) {
                if(err.status == 401){
                    alert("Будь-ласка авторезуйтесь");
                    $state.go('login')
                }
            })
        },
        addProduct: function (product) {
            return $http({
                url: url +"/commodity/add",
                method: "POST",
                data: product
            }).catch(function (err) {
                if(err.status == 401){
                    alert("Будь-ласка авторезуйтесь");
                    $state.go('login')
                }
            })
        },




// NEWS

        addNewies: function (news) {
            return $http({
                url: url +"/news/add",
                method: "POST",
                data: news
            });
        },
    getNewies:function() {
        return $http({
            url: url +"/news/get",
            method: "GET"
        });
    }
    ,
    changeNewies:function(news) {

        return $http({
            url: url +"/news/update",
            method: "PUT",
            data: news
        })
    }
    ,
    deleteNewies:function(id) {
        return $http({
            url: url +"/news/delete/" + id,
            method: "DELETE"
        });
    },


        getCategories: function () {
            return categories;
        }

    }


}]);


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

var url = 'http://185.65.246.204:8081';