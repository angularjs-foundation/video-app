describe('ntApp', function() {

  beforeEach(module('ntApp'));

  describe('appCategories service', function() {
    it('should exist and use $http', function() {
      var included = false;
      module(function($provide) {
        var factory = $provide.factory('$http', function() {
          included = true;
        });
      });
      inject(function(appCategories) {
        expect(included).toBe(true);
      });
    });

    it('should download the categories', inject(function(appCategories, $httpBackend) {
      $httpBackend.expect('GET', '/categories.json').respond(200, []);
      appCategories();
      $httpBackend.verifyNoOutstandingExpectation();
    }));
  });

  describe('CommentsCtrl', function() {
    it('should fire the commentRemoved event when a comment is removed',
      inject(function($controller, $rootScope, currentVideo, $q) {

      var fakeVideo = {};
      currentVideo(fakeVideo);

      var commentRequest = $q.defer();

      var scope = $rootScope.$new();
      var ctrl = $controller('CommentsCtrl', {
        $scope : scope,
        ytVideoComments : function(id) {
          return commentRequest.promise
        }
      });

      commentRequest.resolve([
        { id : 1, comment : 'hello' },
        { id : 2, comment : 'there' }
      ]);

      scope.$apply();

      var eventDetected = false;
      scope.$on('commentRemoved', function() {
        eventDetected = true;
      });

      scope.removeComment(scope.comments[0]);

      expect(eventDetected).toBe(true);
    }));
  });
});
