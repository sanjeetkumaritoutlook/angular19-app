import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-registration-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './user-registration-form.component.html',
  styleUrl: './user-registration-form.component.scss'
})
export class UserRegistrationFormComponent {
 // Component properties for the form fields
 user = {
  username: '',
  email: '',
  password: '',
  preferences: {
    newsletter: false,
    notifications: true,
  },
};
  // Method to handle form submission
  onSubmit() {
    console.log('User Registration Data:', this.user);
    alert('Registration Successful!');
  }
}
