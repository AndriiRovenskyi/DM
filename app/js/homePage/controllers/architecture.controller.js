app.controller('architectureCtrl',['UserService',function (UserService) {
    var vm=this;

    vm.subcategories;
    vm.products;
    vm.currentSub;


    vm.filterProducts = function(el){
        return el.id_sub === vm.currentSub;
    }

    vm.init = function () {
        UserService.getSubCategoriesById(2).then(function (data) {
            vm.subcategories = data.data;
            vm.currentSub = vm.subcategories[0].id;
        });
        UserService.getProduct().then(function (data) {
            vm.products = data.data;
        })

    }
    vm.init();
    

}])