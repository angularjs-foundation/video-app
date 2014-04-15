angular.module('ntApp', [])

  .constant('VERSION', 1.0)// [M2.2] Adjust the version number so that the test passes.

  .run(['$rootScope', 'VERSION', function($rootScope, VERSION) {
    $rootScope.version = VERSION;
    $rootScope.greeting = true;
    $rootScope.todaysDate = '...'; // [M2.3] Attach today's date to `$rootScope.todaysDate`
    $rootScope.isWeekend = function() {
      // [M2.3] Implement `isWeekend()` properly using `$rootScope.todaysDate`.
      // HINT Return true or false if today's date is a weekend or not
      return false;
    };
  }]);
