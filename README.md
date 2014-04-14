# Module 5

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.

## Exercises
1. Run the tests using `grunt autotest` and complete the code to get this to work.
  1. Create a sub service called `appCategories`. Have it inject the `$http` service.
  2. Within `appCategories`, use $http to download the list of categories from `/categories.json`.
  3. Create the feature to allow comments to be removed within `CommentsCtrl` using `removeComment`. Upon removal communicate with the parent controller (`WatchCtrl`) and have it set a scope property to assign. Use the event name `commentRemoved` when communicating between controllers.
  4. In your template code display a message to tell the user when a comment has been removed.
  5. The tests in this example will verify that your code works.
