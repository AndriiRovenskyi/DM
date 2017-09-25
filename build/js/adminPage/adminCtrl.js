app.controller('adminCtrl',['UserService', function (UserService) {
    var vm=this;

    debugger;
    vm.init = function () {
        debugger
        UserService.checkAdmin();
    }
    vm.init();
}])