describe('ntApp', function() {

  beforeEach(module('ntApp'));

  describe('HomeCtrl', function() {
    it('should list some videos',
      inject(function($controller, $rootScope) {

      var $scope = $rootScope.$new();
      $controller('HomeCtrl', {
        $scope : $scope
      });

      expect($scope.videos.length).toBeGreaterThan(0);
    }));
  });

  describe('SearchCtrl', function() {
    it('should apply a search onto the rootScope',
      inject(function($controller, $rootScope) {

      var $scope = $rootScope.$new();
      $controller('SearchCtrl', {
        $scope : $scope
      });

      expect(angular.isFunction($scope.search)).toBe(true);

      expect($rootScope.q).toBeUndefined();
      $scope.search('movie');
      expect($rootScope.q).toEqual('movie');
    }));
  });

  describe('WatchCtrl', function() {
    it('should have a working watch page and controller',
      inject(function($controller, $rootScope, $routeParams) {

      var $scope = $rootScope.$new();

      $routeParams.id = 'my-youtube-id';
      $controller('WatchCtrl', {
        $scope : $scope
      });

      expect($scope.videoSrc.toString()).toContain('my-youtube-id');
    }));
  });

  describe('routes', function() {
    it('should have a working watch videos route',
      inject(function($controller, $rootScope, $route, $location, $templateCache, TPL_PATH) {

      //we're mocking out the watch template here
      $templateCache.put(TPL_PATH + '/watch.html', '<div></div>');

      //this changes the URL of the page
      $location.path('/watch/123');

      //this forces the changes to propagate
      $rootScope.$digest();

      expect($route.current).toBeDefined();
      expect($route.current.controller).toBe('WatchCtrl');
      expect($route.current.loadedTemplateUrl).toContain('watch.html');
    }));
  });

  describe('limitFilter', function() {
    it('should limit requests with the given integer', inject(function(limitFilter) {
      expect(limitFilter([1,2,3], 3)).toEqual([1,2,3]);
      expect(limitFilter([1,2,3], 2)).toEqual([1,2]);
      expect(limitFilter([1,2,3], 1)).toEqual([1]);
      expect(limitFilter([1,2,3], 0)).toEqual([]);
      expect(limitFilter([], 10)).toEqual([]);
    }));
  });
});
