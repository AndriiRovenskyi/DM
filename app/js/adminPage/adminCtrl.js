app.controller('adminCtrl',['AdminService','$state', function (AdminService,$state) {
    var vm=this;

    vm.init = function () {
        AdminService.checkAdmin();
        if($state.current.name == 'admin'){
            $state.go('admin.subCategory');
        }
    }

    vm.logOut = function () {
        AdminService.logOut();
        debugger
    }

    vm.init();
}])