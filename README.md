# Module 4

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.

## Exercises

All of the exercises will be done in `watch.html`.

### M4.1 Layout Directives
Display the `title` and `description` properties.

Setup the template code to display a fallback message if `description` is empty.

Write the template code to display a repeated list of the video comments using the scope member: `video_comments`.

Use `ng-include` on the related videos list to render the template for each video.
HINT You may use `/templates/video-listing.html` or you can create your own template file. Just be sure that ng-include points to the right path to download the file (also remember to use quotes unless you're using a scope variable inside of ng-include).

### M4.2 Event Directives

### M4.3 Styling Directives
Display even and odd colors using `ng-class-even` and `ng-class-odd` on the repeated `video_comments` element (you can the pre-made 'even' class if you want)...
HINT: Remember that both `ng-class-even` and `ng-class-odd` expect a scope variable so be sure to use quotes if a string is present in the template.

### BONUS Visual layout code is not well suited for unit tests but we have created some extra exercises to see how this could be done.
**Run the tests using `grunt test` and complete the exercises until all tests are passing.**

Complete a working first name input complete with ng-model

Complete a working last name input complete with ng-model

Complete a working email input complete with ng-model and an error message-

