app.factory('UserService',function ($http,$state) {
    return {
            checkAdmin: function () {
                if(localStorage.getItem('admin') != 'true'){
                    $state.go('login');
                }
            },
            checkLogin : function (username, password) {
                for(i in users){
                    if(username == users[i].name && password == users[i].password){
                        $state.transitionTo('admin');
                        localStorage.setItem('admin','true');
                    }else{
                        alert('Wrong password');
                    }
                }
            },

        //Mthods with Categories

        addCategory: function (category) {
                    categories.push(category);
        },
        getCategories: function() {
            return categories;
        },
        changeCategory: function (category) {
            for(i in categories){
                if(categories[i].id==category.id){
                    categories.splice(i,1,category);
                }
            }
        },
        deleteCategory: function (id) {
            for(i in categories){
                if(categories[i].id==id){
                    categories.splice(i,1)
                }
            }
        },

        //Method with Subcategories

        addSubcategory: function (subcategory) {
            subcategories.push(subcategory);
        },
        getSubcategories: function() {
            return subcategories;
        },
        changeSubcategory: function (subcategory) {
            for(i in subcategories){
                if(subcategories[i].id==subcategory.id){
                    subcategories.splice(i,1,subcategory);
                }
            }
        },deleteSubcategory: function (id) {
            for(i in subcategories){
                if(subcategories[i].id==id){
                    subcategories.splice(i,1)
                }
            }
        },

        //Method with Products

        getProduct: function () {
            return products;
        },
        changeProduct: function (product) {
            for(i in products){
                if(products[i].id==product.id){
                    products.splice(i,1,product)
                }
            }
        },
        deleteProduct: function (product) {
            for(i in products){
                if(products[i].id==product.id){
                    products.splice(i,1)
                }
            }
        },
        addProduct: function (product) {
            products.push(product);
        },

        //Method with Orders

        getOrder: function () {
            return orders;
        },
        getArchive: function () {
            return archiveOrders;
        },
        deleteOrder: function (id) {
            for(i in archiveOrders){
                if(archiveOrders[i].id==id){
                    archiveOrders.splice(i,1);
                }
            }
        },
        orderToArchive: function (id) {
            for(i in orders){
                if(orders[i].id==id){
                    archiveOrders.push(orders[i]);
                    orders.splice(i,1);
                }
            }
        },
        archiveBack: function (id) {
            for(i in archiveOrders){
                if(archiveOrders[i].id==id){
                    orders.push(archiveOrders[i]);
                    archiveOrders.splice(i,1);
                }
            }
        }
        ,
        updateOrder: function (order) {
            for(i in orders){
                if(orders[i].id==order.id){
                    orders.splice(i,1,order)
                }
            }
        }


    }
});

var users=[{
    name: 'admin',
    password: 'admin'
}];

var categories =[{
    name: 'slavik',
    id: 1
},{
    name: 'vasya',
    id: 2
},{
    name: 'igor',
    id: 3
},{
    name: 'soska',
    id: 4
}];

var subcategories=[{
    name: 'child1',
    id: 1,
    category: categories[2].name
},{
    name: 'child2',
    id: 2,
    category: categories[2].name
},{
    name: 'child3',
    id: 3,
    category: categories[3].name
},{
    name: 'child4',
    id: 4,
    category: categories[3].name
}];

var products=[
    {
        id: 1,
        category: subcategories[0].category,
        subcategory: subcategories[0].name,
        name: 'vogonь',
        price: 123
    },
    {
        id: 2,
        category: subcategories[1].category,
        subcategory: subcategories[1].name,
        name: 'voda',
        price: 321
    },
    {
        id: 3,
        category: subcategories[2].category,
        subcategory: subcategories[2].name,
        name: 'viter',
        price: 223
    },
    {
        id: 4,
        category: subcategories[3].category,
        subcategory: subcategories[3].name,
        name: 'zemlя',
        price: 112
    }
];

var orders=[{
    id: 1,
    user: 'admin',
    date: 11.111111,
    order: 'kawa',
    amount: 12
},{
    id: 2,
    user: 'admin',
    date: 22.222222,
    order: 'banka',
    amount: 23
},{
    id: 3,
    user: 'admin',
    date: 33.333333,
    order: 'oil',
    amount: 34
},{
    id: 4,
    user: 'admin',
    date: 44.444444,
    order: 'maslo',
    amount: 45
}];

var archiveOrders=[{
    id: 5,
    user: 'admin',
    date: 55.555555,
    order: 'kawa',
    amount: 1234567
}]












