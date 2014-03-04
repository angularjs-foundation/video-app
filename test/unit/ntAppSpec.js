describe('ntApp', function() {
  beforeEach(module('ntApp'));

  it('should define a version higher than 1.0', inject(function(VERSION) {
    expect(VERSION).toBeGreaterThan(1.0);
  }));

  it('should have a working isWeekend() scope function', inject(function($rootScope) {
    expect(angular.isFunction($rootScope.isWeekend)).toBe(true);

    var d = new Date();
    d.setMonth(1); //Feb
    d.setDate(1); //1st (Saturday)
    d.setFullYear(2014);

    $rootScope.todaysDate = d;
    expect($rootScope.isWeekend()).toBe(true);

    d.setMonth(1); //Feb
    d.setDate(2); //2nd (Sunday)
    d.setFullYear(2014);
    $rootScope.todaysDate = d;
    expect($rootScope.isWeekend()).toBe(true);

    d.setMonth(1); //Feb
    d.setDate(3); //3rd (Monday)
    d.setFullYear(2014);
    $rootScope.todaysDate = d;
    expect($rootScope.isWeekend()).toBe(false);
  }));
});
