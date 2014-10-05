# Module 4

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.
3. Visit `http://localhost:8888` to view the website.

## Exercises

### M4.1 Layout Directives

All of the exercises will be done in `app/templates/watch.html`.
- Display the `title` and `description` properties. (We can check to see if this works since the data is displayed below the video right beside the video image.)

- Setup the template code to display a fallback message if `description` is empty. (Note
this can be checked afterwards to see if it works in the browser by setting `$scope.video.description = null` inside of `WatchCtrl`.)

- Modify the template code to display a repeated list of the video comments using the scope member: `video_comments`. (Note the ng-repeat code should be on the same element that contains the `nt-video-comment` class value.)

- Use `ng-include` on the related videos list to render the template for each video.
(HINT You may use `/templates/video-listing.html` or you can create your own template file. Just be sure that ng-include points to the right path to download the file. Also remember to use quotes unless you're using a scope variable inside of ng-include.)

### M4.2 Event Directives
View the homepage of the website in your browser. See the two icons beside the search bar for the home page? Let's go to `app/templates/home.html` and find those icon links. Now
let's use `ng-click` to change the layout when clicked. The icon on the left should run
`setLayout('details')` and the other should run `setLayout('pictures')` inside of the ng-click attribute.

### M4.3 Styling Directives
Hop back inside of `app/templates/watch.html`. Find the video comments again and add even and odd colors using `ng-class-even` and `ng-class-odd` on the repeated `video_comments` element (use `even` and `odd` as the CSS classes)...
HINT: Remember that both `ng-class-even` and `ng-class-odd` expect a scope variable so be sure to use quotes if a string is present in the template.

### BONUS Visual layout code is not well suited for unit tests but we have created some extra exercises to see how this could be done.

**You will need to edit the HTML template code in the tests to make this work**.

Run the tests using `grunt autotest` or `grunt test` and complete the exercises until all tests are passing. 

The following fixes need to be made to the tests inside of `test/unit/FormsExampleSpec.js`:
- Complete a working first name input complete with ng-model
- Complete a working last name input complete with ng-model
- Complete a working email input complete with ng-model and an error message-
