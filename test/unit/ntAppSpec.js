describe('ntApp', function() {

  beforeEach(module('ntApp'));

  describe('ntAppAnimations', function() {
    it('ntApp should depend on the ntAppAnimations app', function() {
      var m = angular.module('ntApp');
      expect(m.value('appName').requires).toContain('ntAppAnimations');
    });

    it('should depend on ngAnimate', function() {
      var m = angular.module('ntAppAnimations');
      expect(m.value('appName').requires).toContain('ngAnimate');
    });
  });

  describe('.nt-fade animation', function() {
    it('should inject and use the ntAnimator service', function() {
      var injectSpy = jasmine.createSpy();
      module(function($provide) {
        $provide.factory('ntAnimator', function() {
          injectSpy();
          return { fadeIn : angular.noop, fadeOut : angular.noop }; 
        });
      });
      inject(function($compile, $rootScope, $animate, $rootElement) {
        $rootScope.$apply();

        var scope = $rootScope.$new();
        var element = $compile('<div class="nt-fade"></div>')(scope);
        $animate.enter(element, $rootElement);
        scope.$apply();

        expect(injectSpy).toHaveBeenCalled();
      });
    });

    it('should call ntAnimator.fadeIn on enter', function() {
      var enterSpy = jasmine.createSpy();
      module(function($provide) {
        $provide.value('ntAnimator', {
          fadeIn : enterSpy 
        });
      });
      inject(function($compile, $rootScope, $animate, $rootElement) {
        $rootScope.$apply();

        var scope = $rootScope.$new();
        var element = $compile('<div class="nt-fade"></div>')(scope);

        expect(enterSpy).not.toHaveBeenCalled();
        $animate.enter(element, $rootElement);
        scope.$apply();
        expect(enterSpy).toHaveBeenCalled();
      });
    });

    it('should call ntAnimator.fadeOut on leave', function() {
      var leaveSpy = jasmine.createSpy();
      module(function($provide) {
        $provide.value('ntAnimator', {
          fadeOut : leaveSpy 
        });
      });
      inject(function($compile, $rootScope, $animate, $rootElement) {
        $rootScope.$apply();

        var scope = $rootScope.$new();
        var element = $compile('<div class="nt-fade"></div>')(scope);
        $rootElement.append(element);

        expect(leaveSpy).not.toHaveBeenCalled();
        $animate.leave(element);
        scope.$apply();
        expect(leaveSpy).toHaveBeenCalled();
      });
    });
  });

  describe('ntAnimator service', function() {
    it('should call element.fadeOut on fadeOut and provide a done function',
      inject(function(ntAnimator) {

      var doneFn = function() {};
      var animationSpy = jasmine.createSpy();
      var element = angular.element('<div></div>');

      element.fadeOut = animationSpy;
      ntAnimator.fadeOut(element, doneFn);

      expect(animationSpy).toHaveBeenCalledWith(doneFn);
    }));

    it('should call element.fadeIn on fadeIn and provide a done function',
      inject(function(ntAnimator) {

      var doneFn = function() {};
      var animationSpy = jasmine.createSpy();
      var element = angular.element('<div></div>');

      element.fadeIn = animationSpy;
      ntAnimator.fadeIn(element, doneFn);

      expect(animationSpy).toHaveBeenCalledWith(doneFn);
    }));
  });
});
