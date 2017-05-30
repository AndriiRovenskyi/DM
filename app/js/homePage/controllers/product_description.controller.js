app.controller('prodDescCtrl',['UserService', '$stateParams',function (UserService, $stateParams) {
    var vm = this;

    vm.init = function () {
        vm.currentProduct = UserService.getPoductById($stateParams.fireplaceId).then(function (data) {
            vm.currentProduct = data.data[0];
            UserService.getProduct().then(function (data) {
                vm.similarProducts= data.data.filter(function (el) {
                    return el.id_sub==vm.currentProduct.id_sub && el.id !=  vm.currentProduct.id;
                });
                vm.similarProducts=vm.similarProducts.splice(-2);
            })
        });

    }
    vm.init();



}])