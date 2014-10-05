# Module 6

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.
3. Visit `http://localhost:8888` to view the website.

## Exercises
Run the tests using `grunt autotest` or `grunt test` and complete the exercises until all tests are passing.

Hop into `app/scripts/ntApp.js` and fix the code within to solve the exercises below:

### M6.1 Your First Directive
Listen on `$routeChangeStart` via `$rootScope` in `ntScrollToTop`. Then scroll to
the top of the page when the event listener for `$routeChangeStart` has fired.

### M6.2 Directive Definition Object
Find the `ntFakeVideo` and fill in the HTML code to code for the template string.
The template string should display a video tag like `<video src="">`.

### M6.3 Link Function
When the link function is run, get a hold of the created video element (via element.find('video')) and modify the alternative text on the video element (alt="") to be set as `$scope.description`.

```js
videoElement.attr('alt', $scope.description);
```

### M6.4 Controller Function
Have the controller read the `video-id` and `video-name` attributes from the `$attrs` service
and place then on the scope as `$scope.videoId` and `$scope.videoName`.
