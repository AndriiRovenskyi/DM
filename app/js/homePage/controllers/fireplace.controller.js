app.controller('fireplaceCtrl', ['UserService','$timeout',function (UserService,$timeout) {
    var vm = this;

    // $timeout(function () {
    //     vm.data=vm.subcategories;
    // },1000)

    vm.subcategories;
    vm.products;
    vm.currentSub;




    vm.filterProducts = function(el){
        return el.id_sub === vm.currentSub;


    };

    vm.init = function () {
        UserService.getSubCategoriesById(1).then(function (data) {
            vm.subcategories = data.data;
            vm.currentSub = vm.subcategories[0].id;
        });
        UserService.getProduct().then(function (data) {
            vm.products = data.data;
        })

    };
    vm.init();
}]);
