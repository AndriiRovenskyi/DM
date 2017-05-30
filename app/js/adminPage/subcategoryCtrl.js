app.controller('subcategoryCtrl',['AdminService',function (AdminService) {
    var vm=this;
    vm.subcategories;
    // vm.category
    vm.editSubcat={};

    vm.addSubcategory=function () {
        vm.newSubcategory.img = vm.img.base64;
        AdminService.addSubcategory(vm.newSubcategory).then(function (data) {
            vm.subcategories.push(data.data[0]);
        });
        vm.newSubcategory={};
    }
    vm.changeSubcategory=function (category) {
        vm.editSubcat=Object.assign({},category);
    }
    
    vm.withOut = function (el) {
        return el.id_cat != 3;
    }    
    
    vm.changeSave=function(){

        if(vm.editSubcat!=null){
            if(vm.editImg){
                vm.editSubcat.img = vm.editImg.base64;
            }else{
                vm.editSubcat.img = null;
            }
            AdminService.changeSubcategory(vm.editSubcat).then(function (data) {
                for(var i = 0; i <vm.subcategories.length; i++){
                    if(vm.subcategories[i].id == vm.editSubcat.id){
                        vm.subcategories[i] = data.data[0];
                    }
                }
            });
        }
        vm.editSubcat={};

    }
    vm.deleteSubcategory=function (x) {
        AdminService.deleteSubcategory(x).then(function () {
            vm.subcategories = vm.subcategories.filter(function (el) {
                return el.id != x;
            })
        });
    }
    vm.subcategoryId=function (subcategory) {

        vm.newSubcategory=subcategory;
    }

    vm.init=function () {
        AdminService.getSubcategories().then(function (data) {
            vm.subcategories = data.data;
        });
        vm.categories = AdminService.getCategories().filter(function (el) {
            return el.id!=3
        })
    }
    vm.init();
}])