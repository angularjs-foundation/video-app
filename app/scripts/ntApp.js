angular.module('ntApp', ['ytCore', 'ngRoute'])

  .constant('TPL_PATH', './templates')

  .value('appCategories', [
    'funny','programming', 'web development', 'music', 'video games'
  ])

  .run(['$rootScope', 'TPL_PATH', function($rootScope,   TPL_PATH) {
    $rootScope.tpl = function(file) {
      return TPL_PATH + '/' + file + '.html';
    };
  }])

  .config(function($routeProvider, TPL_PATH) {
    $routeProvider.when('/',{
      controller : 'HomeCtrl',
      templateUrl : TPL_PATH + '/home.html',
    });


    //implement a new route here...
    //$routeProvider.when('...', {});


    $routeProvider.otherwise({
      template : '<h2 class="page-error">Error: Route Not Defined</h2>'
    });
  })

  .controller('HomeCtrl', ['$scope', 'ytCoreMockedVideos', function($scope, ytCoreMockedVideos) {
    $scope.videos = ytCoreMockedVideos;
  }])

  .controller('SearchCtrl', ['$scope', function($scope) {
    //implement the controller for searching here...
  }])

  .filter('limit', function() {
    return function(results, limit) {
      //implement the results filtering here...
      return results;
    };
  })

  .controller('CategoryListCtrl', ['$scope', 'appCategories', function($scope, appCategories) {
    $scope.categories = appCategories;
  }])

  .controller('WatchCtrl', ['$scope', '$routeParams', '$sce', function($scope, $routeParams, $sce) {
    var urlBase = '//www.youtube.com/embed/{ID}';

    var url = urlBase.replace('{ID}', '...'); //implement here...

    //$sce is used to allow the URL to be exposed in the HTML
    $scope.videoSrc = $sce.trustAsResourceUrl(url);
  }])
