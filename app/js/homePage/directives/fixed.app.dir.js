app.directive('homeFix', function($window) {
    return {
        restrict: 'AE',
        templateUrl: '../../../views/directives/fixed_app.html',
        link: function(scope, element, attr) {
            angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= 200) {
                    scope.showScrollUp = "scrollup-show";
                } else {
                    scope.showScrollUp="";
                }
                scope.$apply();
            });
        }
    };
});