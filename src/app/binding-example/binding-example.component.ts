import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-binding-example',
  imports: [CommonModule,FormsModule],
  templateUrl: './binding-example.component.html',
  styleUrl: './binding-example.component.scss'
})
export class BindingExampleComponent {
  userName: string = '';  // Bind this variable to the input field
  isDisabled: boolean = true;  // Disable the button initially

  // Method to handle input change event
  onInputChange(event: any): void {
    this.userName = event.target.value;  // Update userName based on the input field
    this.isDisabled = this.userName.trim().length === 0;  // Enable button only if userName is not empty
  }

  // Method to handle button click event
  onButtonClick(): void {
    alert('Button Clicked!');  // Show an alert when the button is clicked
  }
}
