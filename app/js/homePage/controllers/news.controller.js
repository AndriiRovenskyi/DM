app.controller('newsCtrl',['UserService',function (UserService) {
    var vm=this;
    vm.news = [];
    vm.init = function () {

        UserService.getNews().then(function (data) {
            vm.news = data.data;
        });
    }
    vm.init();
}])
