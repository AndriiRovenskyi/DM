app.controller("myNewsCtrl", ['AdminService', myFunc]);


function myFunc(AdminService) {

    var vm = this;
    vm.newies1;
    vm.addNew=function () {
        vm.newNews.img = vm.image.base64;
        AdminService.addNewies(vm.newNews).then(function (data) {

            vm.newies1.push(data.data[0])
        });
        vm.newNews={};
    };
    vm.changeNews=function () {
        if(vm.editImage){
            vm.editNews.img = vm.editImage.base64;
        }else{
            vm.editNews.img = null;
        }
        AdminService.changeNewies(vm.editNews).then(function (data) {
            for(var i = 0; i <vm.newies1.length; i++){
                if(vm.newies1[i].id == vm.editNews.id){
                    vm.newies1[i] = data.data;
                }
            }

        })
    };
    vm.deleteNews=function (id) {
        AdminService.deleteNewies(id).then(function () {
            vm.newies1 = vm.newies1.filter(function (el) {
                return el.id != id;
            })
        });
    };

    vm.newiesChange=function (news) {
        var obj = Object.assign({},news);
        vm.editNews=obj;
    };
    vm.init = function () {
        AdminService.getNewies().then(function (data) {
            vm.newies1 = data.data;

        });

    };
    vm.init();

};