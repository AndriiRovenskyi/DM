app.directive('homeFooter', function($http,UserService) {
    return {
        restrict: 'AE',
        templateUrl: '../../../views/directives/footer.html',
        link: function(scope, element, attr) {
            // scope.news=UserService.getNews();
            // scope.news=scope.news.slice(-2);
            // scope.news=scope.news.slice(-2);
            UserService.getNews().then(function (data) {
                scope.news = data.data;
                if(scope.news.length > 1){
                    scope.news=scope.news.slice(-2);
                }
            });
        }
    };
});