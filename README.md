# Module 5

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.
3. Visit `http://localhost:8888` to view the website.

## Exercises
Run the tests using `grunt autotest` or `grunt test` and complete the exercises until all tests are passing.

### M5.1 Your First Service
Open up `app/scripts/ntApp.js` and create a sub service called `appCategories`. Then inject the `$http` service into the newly created `appCategories service`.

### M5.2 $http
Open up `app/scripts/ntApp.js`. Now within `appCategories`, use `$http` to download the list of categories from `/categories.json`. When the data is downloaded, use `.then()` with a function that does the following:

```js
return $http.get(...).then(function(response) {
  return response.data;
});
```

### M5.3 Communicating with Controllers
Open up `app/scripts/ntApp.js`.

- Complete the `$scope.removeComment` function inside of `CommentsCtrl` so that comments can be removed when the function is called. The function should also emit the event `commentRemoved` and pass in the removed comment as a parameter as well inside of this function. (HINT use `$scope.comments.splice()` to actually remove the data from the comments array.)

- In `app/templates/watch.html`, add a button that calls `removeComment(comment)` on `CommentsCtrl` when clicked.

- Back inside of `app/scripts/ntApp.js`, listen for the `commentRemoved` event in `WatchCtrl` and update `$scope.commentRemoved` to `true`.

- In `app/templates/watch.html`, display a message to tell the user when a comment
has been removed. (HINT use the `commentRemoved` property that was created before.)
