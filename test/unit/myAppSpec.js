describe('FormsExample', function() {

  it('should have a first_name model', inject(function($compile, $rootScope) {

    //implement an input that has a first name model
    var html = '<input type="text" />'


    var scope = $rootScope.$new();
    var element = angular.element(html);
    $compile(element)(scope);

    scope.$apply(function() {
      scope['firstName'] = 'Jon';
    });

    expect(element.val()).toBe('Jon');
  }));

  it('should have a last_name model', inject(function($compile, $rootScope) {

    //implement an input that has a last name model
    var html = '<input type="text" />'


    var scope = $rootScope.$new();
    var element = angular.element(html);
    $compile(element)(scope);

    scope.$apply(function() {
      scope['lastName'] = 'Smith';
    });

    expect(element.val()).toBe('Smith');
  }));

  it('should have an email address with an error message', inject(function($compile, $rootScope) {

    //implement an input that has an email address model
    var errorMessage = 'You did not enter your email address correctly';
    var html = '<form name="myForm">' +
               '  <input type="email" />' +
               '  <div>' + errorMessage + '</div>' + //enter/remove error message upon validation
               '</form>'


    var scope = $rootScope.$new();
    var element = angular.element(html);

    $compile(element)(scope);

    scope.$apply(function() {
      scope['email'] = 'fake-email';
    });

    expect(element.text()).toContain(errorMessage);

    scope.$apply(function() {
      scope['email'] = 'real@email.com';
    });

    expect(element.text()).not.toContain(errorMessage);
  }));

});
