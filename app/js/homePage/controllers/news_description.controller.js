app.controller('newsDescCtrl', ['UserService','$stateParams', function (UserService, $stateParams) {


    var vm = this;




    vm.init = function () {


        UserService.getNewsById($stateParams.newsId).then(function (data) {
            vm.currentNews = data.data[0];
        });

    }
    vm.init();


}])