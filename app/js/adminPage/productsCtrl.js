app.controller('productsCtrl',['AdminService',function (AdminService) {
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

    vm.filterSub = function (el) {
        if(vm.newProd)
            return el.id_cat == vm.newProd.category;
        return false;
    }


    vm.editProduct=function (product) {
        vm.editProd = Object.assign({},product);
    }

    vm.saveChangeProd = function () {
        AdminService.changeProduct(vm.editProd);
        vm.newProd={};
    }
    vm.deleteProduct=function (product) {
        AdminService.deleteProduct(product).then(function () {
            vm.products= vm.products.filter(function (el) {
                return el.id != product.id
            })
        });
    }
    vm.addProduct=function () {
        vm.newProd.img = vm.img.base64;
        AdminService.addProduct(vm.newProd).then(function (data) {
            vm.products.push(data.data[0])
        });
        vm.newProd={};
    }

    vm.init=function () {
        AdminService.checkAdmin();
        vm.categories=AdminService.getCategories();
        // vm.newProd.category = 1
        AdminService.getSubcategories().then(function (data) {
            vm.subcategories = data.data;
        });

        AdminService.getProduct().then(function (data) {
            vm.products = data.data;

        });
    }
    vm.init();


}])