app.controller('adminCtrl',['UserService', function (UserService) {
    var vm=this;

    vm.init = function () {
        UserService.checkAdmin();
    }
    vm.init();
}])