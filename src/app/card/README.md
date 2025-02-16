in ts file (from parent component)
✅ Allows passing theme dynamically (e.g., <app-card theme="dark">)

✅ Uses [ngClass] to apply the selected theme dynamically.

import CommonModule for this
SCSS Benefits:

Uses variables for maintainability
Uses loops and maps to avoid repetition
Easier to add more themes

✅ Dynamically applies themes (light or dark) using SCSS maps & loops.
✅ Easy to add more themes later (just add to $themes map).


Global built-in functions are deprecated and will be removed in Dart Sass 3.0.0.
Use map.get instead.

More info and automated migrator: https://sass-lang.com/d/import

18 |       border-color: map-get($colors, border);

Let's extend the Angular Card Component by adding:

✅ A button with dynamic text & styles
✅ A title and content that can be customized
✅ More themes (like primary, danger, etc.)

✅ Supports dynamic title, content, and button text
✅ Supports different themes (light, dark, primary, danger)
✅ Supports different button styles (primary, secondary)

----
in html
✅ Uses ngClass to apply the selected theme & button style dynamically.
✅ Binds text dynamically using {{ title }} and {{ content }}.

in scss
 Dynamically applies themes using SCSS maps & loops
✅ Reusable button styles (no need to repeat styles manually)
✅ Easier to maintain and expand (just add new themes to $themes)

 Final Result
✅ Reusable, dynamic card component
✅ Easily add new themes without modifying HTML
✅ SCSS makes it easy to maintain and scale

Would you like me to add animations or responsiveness?
--
Animations/responsiveness:
 Let's enhance our Angular Card Component by adding:

✅ Hover animation (smooth scale effect)
✅ Responsive design (adjusts on small screens)
✅ Button hover effect (subtle color change)


🔥 Enhancements Added:
✅ Hover Animation → Cards smoothly scale and get a shadow
✅ Button Hover Effect → Buttons change color on hover
✅ Responsive Design → Cards take full width on small screens

 Final Thoughts
✅ Looks modern & interactive (with animations)
✅ Works great on desktop & mobile
✅ Easy to extend (just add new themes or styles!)

image inside Card:
✅ Supports dynamic images via imageUrl
✅ Keeps images optional (card works without them too)

 Uses *ngIf="imageUrl" → Only shows the image if an imageUrl is provided
✅ [src]="imageUrl" → Dynamically loads the image

--
scss
Images are responsive
✅ Uses object-fit: cover; to prevent image distortion
✅ Card text & button stay well-aligned

css: field-sizing(https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing)
🎉 Final Improvements
✅ Dynamic image support 🎨
✅ Looks great on mobile & desktop 📱💻
✅ Maintains smooth animations

 Let's enhance the Card Component by making it:

✅ Clickable (entire card can act as a link)
✅ Expandable (toggle more details when clicked)

Enhancements Overview
1️⃣ Clickable Cards → Uses [routerLink] or (click) to navigate
2️⃣ Expandable Cards → Shows extra content on click

✅ Supports links (link input) → Opens when clicked
✅ Supports expand/collapse (expandable input)
✅ isExpanded state toggles extra content

in html:

 Uses <a> for clickable cards
✅ Expands to show more info when clicked


scss:
✅ Expands smoothly with transition
✅ Cards act as links when link is provided
✅ Keeps hover effect for a clean UI

🚀 Final Features
✅ Card can act as a clickable link 🖱️
✅ Expandable content reveals extra details 🔽
✅ Keeps animations & responsiveness
