app.controller('subcategoryCtrl',['UserService',function (UserService) {
    var vm=this;
    vm.subcategories;
    // vm.category
    vm.editSubcat={};

    vm.addSubcategory=function () {
        UserService.addSubcategory(vm.newSubcategory);
        vm.newSubcategory={};
    }
    vm.changeSubcategory=function (category) {
        vm.editSubcat=Object.assign({},category);
    }
    vm.changeSave=function(){
        if(vm.editSubcat!=null){
            UserService.changeSubcategory(vm.editSubcat);
        }
        vm.editSubcat={};

    }
    vm.deleteSubcategory=function (x) {
        UserService.deleteSubcategory(x);
    }
    vm.subcategoryId=function (subcategory) {

        vm.newSubcategory=subcategory;
    }

    vm.init=function () {
        vm.subcategories = UserService.getSubcategories();
        vm.categories = UserService.getCategories();
    }
    vm.init();
}])