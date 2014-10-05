# Module 2

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.
3. Visit `http://localhost:8888` to view the website.

## Exercises
Run the tests using `grunt autotest` or `grunt test` and
complete the exercises until all tests are passing.

### M2.1 Your First Module
Open up `app/scripts/ytCore.js` and create a module called `ytCore`.

### M2.2 Module.constant
Open up `app/scripts/ntApp.js` and adjust the version number so that the
test passes.

### M2.3 Module.run
Open up `app/scripts/ntApp.js` and attach an instance of `new Date()` to
`$rootScope.todaysDate`. Then complete the code inside of
`$rootScope.isWeekend` to ensure that it correctly determines if 
`$rootScope.todaysDate` falls on a weekend.
