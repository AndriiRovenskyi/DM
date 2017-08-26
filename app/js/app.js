var app=angular.module("myApp",['ngAnimate','ui.router','slickCarousel','naif.base64','anim-in-out','textAngular']);
app.run(function ($rootScope, LanguageService,$location,anchorSmoothScroll,$window) {
    $rootScope.language = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'Ua';
    LanguageService.getUA().then(function (data) {

        $rootScope.allText=data.data;
    });
    $rootScope.scrollTop=function(x) {
        $location.hash(x);
        anchorSmoothScroll.scrollTo(x);
    }

    $rootScope.scrollToProducts=function(x) {
        if($window.innerWidth<=480){
            $location.hash(x);
            anchorSmoothScroll.scrollTo(x);
        }

    }

});

