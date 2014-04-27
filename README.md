# Module 6

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.

## Exercises
Run the tests using `grunt test` and complete the exercises until all tests are passing.

Hop into `app/scripts/ntApp.js` and fix the code within to solve the exercises below:

### M6.1 Your First Directive
Create a listener for the `$routeChangeStart` event in `ntScrollToTop`.

Add the code to scroll to the top of the page when `$routeChangeStart` is fired.

### M6.2 Directive Definition Object
Find the `ntFakeVideo` and fill in the HTML code to code for the template string.
The template string should display a video tag like `<video src="">`.

### M6.3 Link Function
When the link function is run, get ahold of the created video element and modify the
alternative text (alt="") attribute and place a description read from `$scope.description`
as its value.

### M6.4 Controller Function
Have the controller read the `video-id` and `video-name` attributes from the `$attrs` service
and place then on the scope as `$scope.videoId` and `$scope.videoName`.
