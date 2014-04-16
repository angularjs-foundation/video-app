# Module 5

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.

## Exercises
Run the tests using `grunt test` and complete the exercises until all tests are passing.

### M5.1 Your First Service
Create a sub service called `appCategories` in `ntApp.js` and inject the `$http` service.

### M5.2 $http
Within `appCategories`, use `$http` to download the list of categories from `/categories.json`.

### M5.3 Communicating with Controllers
In `ntApp.js`, complete `removeComment` in `CommentsCtrl` so that comments can be removed.

In `watch.html`, add a button that calls `removeComment` on `CommentsCtrl`.

Upon comment removal, communicate with the parent controller (`WatchCtrl`) using the event name `commentRemoved`.

Listen for the `commentRemoved` event in `WatchCtrl` and update `$scope.commentRemoved` to `true`.

In `watch.html`, display a message to tell the user when a comment has been removed.