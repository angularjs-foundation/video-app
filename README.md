# Module 7

## Getting Started
1. Run `npm install` to install the app.
2. Run `grunt` to start the application.

## Exercises
Run the tests using `grunt test` and complete the exercises until all tests are passing.

### M7.1 Your First Animation
Attach the `ntAppAnimations` module to `ntApp` and attach `ngAnimate` to `ntAppAnimations`.

### M7.2 CSS Transition
Create a CSS transition to fade in each of the video items on the screen. Hop into `app/styles/animations.css` and apply the styling to the `.repeater.ng-enter`, `.repeater.ng-enter.ng-enter-active`, `.repeater.ng-leave`, `.repeater.ng-leave.ng-leave-active` CSS classes (note you'll also need to add a transition style to both the ng-enter and ng-leave classes).

### M7.3 CSS Animation
- Add the `view_enter` and `view_leave` keyframe animations to the `.nt-view.ng-enter` and `.nt-view.ng-leave` CSS classes present in `app/styles/animations.css`.

- Apply a stagger animation (for a `.2s` delay) to the `.repeater` animation CSS class for both `.repeater.ng-enter-stagger` and `.repeater.ng-leave-stagger`. The `.repeater` CSS class is present in  `app/styles/animations.css`.

### M7.4 JavaScript Animation
Complete the code within `app/scripts/ntAppAnimations.js` for the animation called `.nt-fade`.
Have the animation inject `ntAnimator` and call `ntAnimate.fadeIn(element, done) on enter` and `ntAnimate.fadeOut(element, done) on leave`.

Within `ntAnimator`, have the `fadeOut` animation perform a `fade-out animation in jQuery`. Do the opposite for `fadeIn` (remember to call the provided done function).
