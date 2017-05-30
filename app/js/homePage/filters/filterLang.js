//
// app.filter("translatorTitle",function ($rootScope) {
//     return function (el) {
//             return el['name'+$rootScope.language];
//     }
// })
// app.filter("translatorDesc",function ($rootScope) {
//     return function (el) {
//             return el['description'+$rootScope.language];
//     }
// })


app.filter("translator",function ($rootScope) {
    return function (el,name) {
            return el[name+$rootScope.language];
    }
})


app.filter("dataFilter",function ($rootScope) {
    return function (el) {
        var data = el.slice(0,10);
        data = data.split("-").reverse().join(".");
        return data;
    }
})