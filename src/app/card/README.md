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
