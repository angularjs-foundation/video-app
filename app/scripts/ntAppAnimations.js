angular.module('ntAnimations', [])

  .factory('ntAnimator', function() {
    return {
      fadeOut : function(element, done) {
        //call the fadeOut event in jquery
      },
      fadeIn : function(element, done) {
        //call the fadeIn event in jquery
      }
    };
  })

  .animation('.nt-fade', function() {
    return {
      enter : function(element, done) {
        //implement the fade-in animation
      },
      leave : function(element, done) {
        //implement the fade-out animation
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
