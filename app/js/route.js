app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/homemain');

    $stateProvider

    // ADMINKA -------------
        .state('admin', {
            url: '/admin',
            templateUrl: 'views/admin_view/admin.html',
            controller: 'adminCtrl',
            controllerAs: 'admin'
        })

        // orders in admin
        .state('admin.orders', {
            url: 'orders',
            templateUrl: 'views/admin_view/orders.html',
            controller: 'ordersCtrl',
            controllerAs: 'ord'
        })

        // users in admin
        .state('admin.users', {
            url: 'users',
            templateUrl: 'views/admin_view/users.html'
        })

        // category in admin
        .state('admin.category', {
            url: 'category',
            templateUrl: 'views/admin_view/category.html',
            controller: 'categoryCtrl',
            controllerAs: 'cat'

        })

        // subCategory in admin
        .state('admin.subCategory', {
            url: 'subCategory',
            templateUrl: 'views/admin_view/subCategory.html',
            controller: 'subcategoryCtrl',
            controllerAs: 'sub'
        })

        // products in admin
        .state('admin.products', {
            url: 'products',
            templateUrl: 'views/admin_view/products.html',
            controller: 'productsCtrl',
            controllerAs: 'prod'
        })


        .state('login', {
            url: '/login',
            templateUrl: 'views/admin_view/login.html',
            controller: 'loginCtrl',
            controllerAs: 'my',
        })

        //HOME PAGE

        .state('home', {
            url: '/home',
            templateUrl: 'views/tamplates/main.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
        })

        .state('home.main', {
            url: 'main',
            templateUrl: 'views/tamplates/home_main.html',
            controller: 'mainCtrl',
            controllerAs: 'main'
        })
        .state('home.news', {
            url: 'news',
            templateUrl: 'views/tamplates/home_news.html',
            controller: 'newsCtrl',
            controllerAs: 'news'
        })
        .state('home.fireplace', {
            url: 'fireplace',
            templateUrl: 'views/tamplates/home_fireplaces.html',
            controller: 'fireplaceCtrl',
            controllerAs: 'fire'
        })
        .state('home.product', {
            url: 'product/{fireplaceId}',
            templateUrl: 'views/tamplates/home.product_desc.html',
            controller: 'prodDescCtrl',
            controllerAs: 'prod'
        })

        .state('home.sculpture', {
            url: 'sculpture',
            templateUrl: 'views/tamplates/home_sculptures.html',
            controller: 'sculptureCtrl',
            controllerAs: 'scul'
        })
        .state('home.architecture', {
            url: 'architecture',
            templateUrl: 'views/tamplates/home_architecture.html',
            controller: 'architectureCtrl',
            controllerAs: 'arch'
        })
        .state('home.contact', {
            url: 'contact',
            templateUrl: 'views/tamplates/home_contacts.html',
            controller: 'contactCtrl',
            controllerAs: 'cont'
        })
        .state('home.newsdesc', {
            url: 'newsdesc/{newsId}',
            templateUrl: 'views/tamplates/home.news_description.html',
            controller: 'newsDescCtrl',
            controllerAs: 'desc'
        })
        .state('admin.news', {
        url: 'news',
        templateUrl: 'views/admin_view/news.html',
        controller: 'myNewsCtrl',
        controllerAs: 'news'
    }).state("otherwise", { url : '/'})



});

app.run(function($http) {
    var token = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : '';
    debugger
    $http.defaults.headers.common.Authorization = token;
});