import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, CommonModule], // Add CommonModule here
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {
  error: string | null = null;
  // ngOnInit() {
  //   this.error = 'This is a test error!';
  // }
  onSubmit(form: any) {
    if (form.invalid) {
      this.error = 'Form is invalid!';
      console.log('Form is invalid', form.controls);
    } else {
      this.error = null;
      console.log('Form Submitted', form.value);
    }
  }
}
