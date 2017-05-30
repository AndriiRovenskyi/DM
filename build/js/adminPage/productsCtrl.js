app.controller('productsCtrl',['UserService',function (UserService) {
    var vm=this;
    vm.products=[];
    vm.categories=[];
    vm.subcategories=[];

    vm.editProd = {
        id: '',
        category: '',
        subcategory: '',
        name: '',
        price: ''
    }


    vm.editProduct=function (product) {
        vm.editProd = Object.assign({},product);
    }

    vm.saveChangeProd = function () {
        UserService.changeProduct(vm.editProd);
        vm.newProd={};
    }
    vm.deleteProduct=function (product) {
        UserService.deleteProduct(product);
    }
    vm.addProduct=function () {
        UserService.addProduct(vm.newProd);
        vm.newProd={};
    }

    vm.init=function () {
        vm.categories=UserService.getCategories();
        vm.subcategories=UserService.getSubcategories();
        vm.products=UserService.getProduct();
    }
    vm.init();


}])