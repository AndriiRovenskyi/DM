app.controller('adminCtrl',['UserService', function (UserService) {
    var vm=this;

    vm.init = function () {
        debugger
        UserService.checkAdmin();
    }
    vm.init();
}])