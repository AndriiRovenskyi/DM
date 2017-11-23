
app.directive('homeHeader', function($rootScope,$http,LanguageService,$window) {
    return {
        restrict: 'AE',
        templateUrl: '../../../views/directives/header.html',
        link: function(scope, element, attr) {
            scope.changeLanguage=function (lang) {
                scope.active=true;
                localStorage.setItem('language',lang);
                $rootScope.language = lang;

                if(lang=="Ua"){
                    LanguageService.getUA().then(function (data) {
                        $rootScope.allText=data.data;
                    });
                };
                if(lang=="Pl"){
                    LanguageService.getPL().then(function (data) {
                        $rootScope.allText=data.data;
                    });
                };
                if(lang=="Eng"){
                    LanguageService.getEN().then(function (data) {
                        $rootScope.allText=data.data;
                    });
                };
                if(lang=="Ru"){
                    LanguageService.getRU().then(function (data) {
                        $rootScope.allText=data.data;
                    });
                }
            };
            scope.currentTitle=function() {

                if(location.hash=="#/homemain"){
                    return $rootScope.allText.menuItemMain;
                }
                if(location.hash=="#/homenews"){
                    return $rootScope.allText.menuItemNews;
                }
                if(location.hash=="#/homefireplace"){
                    return $rootScope.allText.menuItemFires;
                }
                if(location.hash=="#/homesculpture"){
                    return $rootScope.allText.menuItemSculptures;
                }
                if(location.hash=="#/homearchitecture"){
                    return $rootScope.allText.menuItemArchitectures;
                }
                if(location.hash=="#/homecontact"){
                    return $rootScope.allText.menuItemContacts;
                }

            }

            angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= document.querySelector('.top-menu').offsetTop&&$window.innerWidth>769) {
                    scope.headerThin = "header-thin";
                    scope.logoSmall = "logo-small";
                } else {
                    scope.headerThin = "";
                    scope.logoSmall = "";

                }
                if (this.pageYOffset >= 76) {
                    scope.fixedActiveMenu ="fixed-active-menu";
                } else {
                    scope.fixedActiveMenu = "";
                }

                scope.$apply();
            });

        }
    };
});
