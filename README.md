# Module 7

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.

## Index Page Exercises
- Create a CSS animation to slide the page from the left side of the screen to the right.
- Create a CSS transition to fade in each of the video items on the screen. Create the `.repeater.ng-enter`, `.repeater.ng-enter.ng-enter-active`, `.repeater.ng-leave`, `.repeater.ng-leave.ng-leave-active` CSS classes containing some transition code and styling. 
- Apply a stagger animation to the repeater transition (the same transition that you created above).

## Exercises
1. Run the tests using `grunt autotest` and complete the JS to make the test work inside of `scripts/ntApp.js`.
  - Attach the `ntAppAnimations` module to `ntApp` and attach `ngAnimate` to `ntAppAnimations`.
  - Create a JS animation and inject `ntAnimator` into it. Then call `ntAnimate.fadeIn(element, done) on enter` and `ntAnimate.fadeOut(element, done) on leave`.
  - Now make `ntAnimate.fadeOut` perform a `fade-out animation in jQuery`. Do the opposite for `ntAnimate.fadeIn` (remember to call the done function).
