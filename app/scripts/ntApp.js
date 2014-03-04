angular.module('ntApp', [])

  .constant('VERSION', 1.0)

  .run(['$rootScope', 'VERSION', function($rootScope, VERSION) {
    $rootScope.version = VERSION;
    $rootScope.greeting = true;
    $rootScope.todaysDate = '...';
    $rootScope.isWeekend = function() {
      //return true or false if today's date is a weekend or no
      return false;
    };
  }]);
