describe('ntApp', function() {

  beforeEach(module('ntApp'));

  describe('ntScrollToTop', function() {
    it('should scroll to the top of the page each time the route changes', function() {
      var windowSpy = jasmine.createSpy();
      module(function($provide) {
        $provide.decorator('$window', function($delegate) {
          $delegate.scrollTo = windowSpy;
          return $delegate;
        });
      });
      inject(function($rootScope, $window, $compile) {
        var html = '<input type="text" nt-scroll-to-top></div>';
        var element = $compile(html)($rootScope);

        expect(windowSpy).not.toHaveBeenCalled();
        $rootScope.$broadcast('$routeChangeStart');
        expect(windowSpy).toHaveBeenCalledWith(0,0);
      });
    });
  });

  describe('ntLoadingIndicator', function() {
    var startSpy = jasmine.createSpy(),
        doneSpy = jasmine.createSpy(),
        element, scope;

    beforeEach(module(function($provide) {
      startSpy.reset();
      doneSpy.reset();

      $provide.value('ntProgress', {
        configure : angular.noop,
        start : startSpy,
        done : doneSpy
      });

      return function($compile, $rootScope) {
        scope = $rootScope.$new();
        element = $compile('<div nt-loading-indicator></div>')(scope);
      };
    }));

    it('should call ntProgress.start() when ntLoadingStart is broadcasted', inject(function() {
      expect(startSpy).not.toHaveBeenCalled();
      scope.$broadcast('ntLoadingStart');
      expect(startSpy).toHaveBeenCalled();
    }));

    it('should call ntProgress.start() when scope.start is called ', inject(function() {
      expect(startSpy).not.toHaveBeenCalled();
      scope.start();
      expect(startSpy).toHaveBeenCalled();
    }));

    it('should call ntProgress.done() when ntLoadingEnd is broadcasted', inject(function() {
      expect(doneSpy).not.toHaveBeenCalled();
      scope.$broadcast('ntLoadingEnd');
      expect(doneSpy).toHaveBeenCalled();
    }));

    it('should call ntProgress.done() when scope.end is broadcasted', inject(function() {
      expect(doneSpy).not.toHaveBeenCalled();
      scope.end();
      expect(doneSpy).toHaveBeenCalled();
    }));
  });

  describe('ntFakeVideo', function() {

    var element, scope, html;
    beforeEach(inject(function($compile, $rootScope) {
      html = '<div nt-fake-video video-id="id" video-name="name"></div>';
      scope = $rootScope.$new();
      scope.id = '123';
      scope.name = 'my-video';
      scope.description = 'a description about the video';
      element = $compile(html)(scope);
    }));

    it('should use an inline template that contains a video tag', inject(function() {
      scope.$apply();
      expect(element[0].outerHTML).toContain('<video');
    }));

    it('should bind the video tag video-id and name attributes value to the scope', inject(function() {
      expect(html).toContain('video-id="id"');
      expect(html).toContain('video-name="name"');

      expect(scope.videoId).toBe('123');
      expect(scope.videoName).toBe('my-video');
    }));

    it('should place a description on the video element\'s alt attribute', inject(function() {
      expect(html).not.toContain('alt');
      expect(element.find('video').attr('alt')).toContain('a description about the video');
    }));
  });
});
