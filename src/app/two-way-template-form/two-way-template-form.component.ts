import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-two-way-template-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './two-way-template-form.component.html',
  styleUrl: './two-way-template-form.component.scss'
})
export class TwoWayTemplateFormComponent {

// Component properties bound to the form fields
user = {
  name: '',
  email: '',
  age: null,
};

onSubmit() {
  console.log('Form submitted:', this.user);
}
}
