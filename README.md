# Module 4

## Getting Started
1. Run `npm install` and `bower install` to install the app.
2. Run `grunt` to start the application.

## Exercises

### Watch Page Exercises (watch.html)
1. Reveal the `title` and `description` components in the watch page.
2. Setup the template code to display a fallback message if the description is empty.
3. Write the template code to display a repeated list of the video comments using the scope member: `video_comments`.
4. Display even and odd colors using `ng-class-even` and `ng-class-odd` on the repeated video_comments element (you can the pre-made 'even' class if you want)... Remember that both `ng-class-even` and `ng-class-odd` expect a scope variable so be sure to use quotes if a string is present in the template.
5. Use `ng-include` on the related videos list to render the template for each video. Note that you may use
`/templates/video-listing.html` or you can create your own template file. Just be sure that ng-include points to the right path to download the file (also remember to use quotes unless you're using a scope variable inside of ng-include).

### Forms exercise
1. Run the tests using `grunt autotest` and complete the HTML code in the failing test. The HTML template
code should do the following:
  - Complete a working first name input complete with ng-model
  - Complete a working last name input complete with ng-model
  - Complete a working email input complete with ng-model and an error message
