app.controller('loginCtrl',['UserService', function (UserService) {
    var vm=this;

    vm.check=function () {

    }

    vm.submit=function () {
        UserService.checkLogin(vm.username, vm.password);
    }


}])
