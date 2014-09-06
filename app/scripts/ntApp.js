angular.module('ntApp', ['ytCore', 'ngRoute'])

    .constant('TPL_PATH', './templates')

    .value('appCategories', [
        'funny', 'programming', 'web development', 'music', 'video games'
    ])

    .run(['$rootScope', 'TPL_PATH', function ($rootScope, TPL_PATH) {
        $rootScope.tpl = function (file) {
            return TPL_PATH + '/' + file + '.html';
        };
    }])

    .config(function ($routeProvider, TPL_PATH) {
        $routeProvider.when('/', {
            controller: 'HomeCtrl',
            templateUrl: TPL_PATH + '/home.html'
        });

        // [M3.3] Add a new route to the page called which uses `WatchCtrl` and the `watch.html` template.
        // HINT $routeProvider.when('...', {});
        $routeProvider.when('/watch/:id', {
            controller: 'WatchCtrl',
            templateUrl: TPL_PATH + '/watch.html'
        });

        $routeProvider.otherwise({
            template: '<h2 class="page-error">Error: Route Not Defined</h2>'
        });
    })

    .controller('HomeCtrl', ['$scope', 'ytCoreMockedVideos', function ($scope, ytCoreMockedVideos) {
        $scope.videos = ytCoreMockedVideos;
    }])

    // [M3.1] Create a controller and call it `SearchCtrl`
    // [M3.2] In the `SearchCtrl` expose `search()` as a scope member.
    .controller('SearchCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.search = function(q) {
            $rootScope.q = q;
        }
    }])

    .filter('limit', function () {
        return function (results, limit) {
            // [BONUS] Implement the `limit` filter to limit properties with a given number.
            return results.slice(0, limit);
        };
    })

    .controller('CategoryListCtrl', ['$scope', 'appCategories', function ($scope, appCategories) {
        $scope.categories = appCategories;
    }])

    .controller('WatchCtrl', ['$scope', '$routeParams', '$sce', function ($scope, $routeParams, $sce) {
        var urlBase = '//www.youtube.com/embed/{ID}';

        // [M3.2] Fix the url variable so that the `videoSrc` property is correct.
        // HINT Use $routeParams to get the id
        var url = urlBase.replace('{ID}', $routeParams.id);

        //$sce is used to allow the URL to be exposed in the HTML
        $scope.videoSrc = $sce.trustAsResourceUrl(url);
    }])
