Example of Both Property Binding and Event Binding in a Single Angular Component
Let’s consider a component where you have a button and an input field. The input field’s value will be bound to a property, and when the user types in the input field, the button’s disabled state will be dynamically updated based on the input.

Steps:
Property Binding will be used to bind the value of the input field to a variable in the component.
Event Binding will be used to capture the user’s input and update the component property.
------
====
Explanation:
Property Binding:

[disabled]="isDisabled": This binds the disabled property of the button to the isDisabled variable. The button will be disabled when isDisabled is true.
[(ngModel)]="userName": This is two-way data binding. The input field is bound to the userName property. Any changes made to the input field will update the userName property in the component, and vice versa.
Event Binding:

(input)="onInputChange($event)": This binds the input event of the input field to the onInputChange method. Every time the user types in the input field, this method is called, and it updates the userName and isDisabled properties.
(click)="onButtonClick()": This binds the click event of the button to the onButtonClick method. When the button is clicked, it triggers an alert.
----
How It Works:
The user types in the input field, which updates the userName property because of two-way data binding ([(ngModel)]).
The onInputChange method is triggered every time the user types, and it updates the isDisabled property depending on whether the userName is empty or not.
The button’s disabled property is bound to isDisabled, so when isDisabled is true, the button is disabled. Otherwise, it is enabled.
When the user clicks the button, the onButtonClick method is called, which displays an alert.
---
Benefits of Using Both Property Binding and Event Binding:
Property Binding is used to reflect the state of a property (e.g., the disabled state of the button) in the template.
Event Binding is used to respond to user interactions (e.g., input changes or button clicks) and update component properties or trigger actions.
