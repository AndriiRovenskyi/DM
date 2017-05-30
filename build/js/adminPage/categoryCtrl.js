app.controller('categoryCtrl',['UserService', function (UserService) {
    var vm=this;
    vm.categories;



    vm.addCategory=function () {
        UserService.addCategory(vm.newCategory);
        vm.newCategory={};
    }
    vm.changeCategory=function () {
        UserService.changeCategory(vm.editCategory);
    }
    vm.deleteCategory=function (id) {
        UserService.deleteCategory(id);
        vm.init();
    }

    vm.categoryChange=function (category) {
        var obj = Object.assign({},category);
        vm.editCategory=obj;
    }

    vm.init=function () {
        vm.categories=UserService.getCategories();
    }
    vm.init();
}])


