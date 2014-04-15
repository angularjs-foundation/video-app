# Module 7

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.

## Exercises
Run the tests using `grunt test` and complete the exercises until all tests are passing.

### M7.1 Your First Animation
Attach the `ntAppAnimations` module to `ntApp` and attach `ngAnimate` to `ntAppAnimations`.

### M7.2 CSS Transition
Create a CSS transition to fade in each of the video items on the screen. Create the `.repeater.ng-enter`, `.repeater.ng-enter.ng-enter-active`, `.repeater.ng-leave`, `.repeater.ng-leave.ng-leave-active` CSS classes containing some transition code and styling.

### M7.3 CSS Animation
Create a CSS animation to slide the page from the left side of the screen to the right.

Apply a stagger animation to the repeater transition (the same transition that you created above).

### M7.4 JavaScript Animation
Create a JS animation and inject `ntAnimator` into it. Then call `ntAnimate.fadeIn(element, done) on enter` and `ntAnimate.fadeOut(element, done) on leave`.

Now make `ntAnimate.fadeOut` perform a `fade-out animation in jQuery`. Do the opposite for `ntAnimate.fadeIn` (remember to call the done function).


