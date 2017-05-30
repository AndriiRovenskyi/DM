app.controller('adminCtrl',['AdminService', function (AdminService) {
    var vm=this;

    vm.init = function () {
        AdminService.checkAdmin();
    }
    vm.init();
}])