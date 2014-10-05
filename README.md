# Module 3

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.
3. Visit `http://localhost:8888` to view the website.

## Exercises
Run the tests using `grunt autotest` or `grunt test` and complete the
exercises until all tests are passing.

### M3.1 Your First Controller
Open up `app/scripts/ntApp.js` and create a controller and call it
`SearchCtrl`. For now the controller should only inject `$scope` and
`$rootScope`.

### M3.2 Methods and Properties on $scope
Open up `app/scripts/ntApp.js` and add the code into `SearchCtrl` to expose
`search()` as scope member on `$scope`. Then inside of the search controller
code make sure that `$rootScope.q` is changed each time the function is called.
Basically what is happening here is that when the search is performed then the
`$rootScope.q` value updates which causes the search to actually happen.
(Remember that the value passed into `$scope.search(VALUE)` is the search
data entered by the user.)

### M3.3 Routes and Controllers
- Open up `app/scripts/ntApp.js` and add a new route to the page called which
uses `WatchCtrl` and the `watch.html` template. Set the route path as
`/watch/:id`. The templateUrl value is `TPL_PATH + '/watch.html'`.

- Open up `app/scripts/ntApp.js` and find the `WatchCtrl` controller. Inside of the
controller, fix the `url` variable so that the `{ID}` value is replaced with the ID
present inside of `$routeParams`.

### BONUS Filters
Implement the `limit` filter to limit properties with a given number. (Hint: use
`values.slice()` to cut up the array of values.)
