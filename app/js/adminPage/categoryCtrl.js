app.controller('categoryCtrl',['AdminService', function (AdminService) {
    var vm=this;
    vm.categories;



    vm.addCategory=function () {
        AdminService.addCategory(vm.newCategory);
        vm.newCategory={};
    }
    vm.changeCategory=function () {
        AdminService.changeCategory(vm.editCategory);
    }
    vm.deleteCategory=function (id) {
        AdminService.deleteCategory(id);
        vm.init();
    }

    vm.categoryChange = function (category) {
        var obj = Object.assign({},category);
        vm.editCategory=obj;
    }

    vm.init=function () {
        AdminService.checkAdmin();
        vm.categories=AdminService.getCategories();
    }
    vm.init();
}])


