# Module 3

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.

## Exercises
1. Add a new route to the page called which uses `WatchCtrl`.
2. Create a new controller and apply a search filter to the video results on the home page.
3. Run the tests using `grunt autotest` and complete the code to get this to work.
   - Create `SearchCtrl` and expose `search()` a scope member.
   - Ensure that the new route for WatchCtrl controller works.
   - Ensure that the `videoSrc` property is set on the WatchCtrl controller.
   - Implement the `limit` filter to limit properties with a given number.
