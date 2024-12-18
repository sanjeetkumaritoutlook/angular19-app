Key Features:
Two-Way Binding:

The [(ngModel)] syntax binds the form field to the user object in the component.
Changes in the input field update the user object in real time.
Updates to the user object reflect in the input field automatically.
Validation:

Added required and min="1" attributes to the fields for basic validation.
Error messages are conditionally displayed using *ngIf.
Dynamic Button State:

The submit button is disabled unless all fields are valid:
html
Copy code
[disabled]="!user.name || !user.email || !user.age"
Preview Section:

Displays the current values of the user object below the form, dynamically updating as the user types.

How It Works
When the user types in the fields, the user object in the component updates automatically.
If the user clears any required field or enters invalid data, error messages are displayed, and the submit button is disabled.
On form submission, the onSubmit method is called, and the user object is logged to the console.

real-life example of a two-way data binding form in Angular:-> for a user registration form.