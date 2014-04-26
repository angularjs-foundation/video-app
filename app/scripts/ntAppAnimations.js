// [M7.1] Add the ngAnimate module
angular.module('ntAnimations', [])

  .factory('ntAnimator', function() {
    return {
      fadeOut : function(element, done) {
        //[M7.4] call the fadeOut event in jquery
      },
      fadeIn : function(element, done) {
        //[M7.4] call the fadeIn event in jquery
      }
    };
  })

  //[M7.4] inject the ntAnimator service
  .animation('.nt-fade', function() {
    return {
      enter : function(element, done) {
        //[M7.4] call ntAnimator.fadeIn(element, done);
      },
      leave : function(element, done) {
        //[M7.4] call ntAnimator.fadeOut(element, done);
      }
    }
  })

  .animation('.nt-expand', ['$route', function($route) {
    var formerRoute;
    return {
      enter : function(element, done) {
        var expectedHeight = element.height();
        element.css('left', -50);
        element.css('opacity', 0);
        element.animate({
          'left': 0,
          'opacity': 1
        }, done);
      },
      leave : function(element, done) {
        var expectedHeight = element.height();
        element.animate({
          'left': -50,
          'opacity':0
        }, done);
      }
    }
  }])
