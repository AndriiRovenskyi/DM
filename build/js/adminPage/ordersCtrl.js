app.controller('ordersCtrl',['UserService',function (UserService) {
    var vm=this;
    vm.editOrd={}


    vm.changeOrder=function (order) {
        vm.editOrd=Object.assign({},order);
        console.log(vm.editOrd);
    }

    vm.saveChangeOrder=function () {
        if(vm.editOrd!=null){
            UserService.updateOrder(vm.editOrd);
        }
    }

    vm.deleteOrder=function (id) {
        UserService.deleteOrder(id);
    }

    vm.archiveOrder=function (id) {
        UserService.orderToArchive(id);
    }

    vm.archiveBack=function (id) {
        UserService.archiveBack(id);
    }



    vm.init=function () {
        vm.orders=UserService.getOrder();
        vm.archive=UserService.getArchive();
    }
    vm.init();


}])