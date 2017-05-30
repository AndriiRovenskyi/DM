app.controller('loginCtrl',['AdminService', function (AdminService) {
    var vm=this;

    vm.check=function () {

    }

    vm.submit=function () {
        AdminService.checkLogin(vm.username, vm.password);
    }


}])
