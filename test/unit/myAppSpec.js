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
    var html = '<div>' +
               '  <input type="email" />' +
               '  <div>' + errorMessage + '</div>' + //enter/remove error message upon validation
               '</div>'


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

  iit('should submit the form properly and tell the page if valid or not', function() {
    module(function($controllerProvider) {
      var FormCtrl = ['$scope', function($scope) {
        $scope.onSubmit = function() {

          $scope.validSubmit = null; //check for validity here

        };
      }];

      $controllerProvider.register('FormCtrl', FormCtrl);
    });
    inject(function($compile, $rootScope) {
      //implement an input that has an email address model
      var errorMessage = 'Please fill in all of the form input fields!';
      var html = '<form name="myForm" ng-controller="FormCtrl">' + 
                 ' <div ng-if="validSubmit">' + //display the error message here
                 ' </div>' + 
                 ' <input type="first_name" ng-model="firstName" required />' +
                 ' <input type="last_name" ng-model="lastName" required />' +
                 ' <input type="email" ng-model="email" required />' +
                 '</form>';


      var scope = $rootScope.$new();
      var element = angular.element(html);
      $compile(element)(scope);

      scope.$apply(function() {
        scope['first_name'] = null;
        scope['last_name'] = null;
        scope['email'] = null;
      });

      expect(element.text()).toContain(errorMessage);

      scope.$apply(function() {
        scope['first_name'] = 'Jon';
        scope['last_name'] = 'Smith';
        scope['email'] = null;
      });

      expect(element.text()).toContain(errorMessage);

      scope.$apply(function() {
        scope['first_name'] = 'Jon';
        scope['last_name'] = 'Smith';
        scope['email'] = 'jon@smith.com';
      });

      expect(element.text()).not.toContain(errorMessage);
    });
  });

});
