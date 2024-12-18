import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators,AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-dynamic-reactive-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './dynamic-reactive-form.component.html',
  styleUrl: './dynamic-reactive-form.component.scss'
})
export class DynamicReactiveFormComponent implements OnInit {
  dynamicForm!: FormGroup;  // Non-null assertion operator
  formFields!: any[];  // Non-null assertion operator
  fb: FormBuilder;  // Declare fb property

  constructor() {
    // Initialize FormBuilder inside the constructor
    this.fb = new FormBuilder();
  }

  ngOnInit() {
    // Example: Dynamic configuration for fields
    this.formFields = [
      { name: 'username', label: 'Username', type: 'text', validators: [Validators.required] },
      { name: 'email', label: 'Email', type: 'email', validators: [Validators.required, Validators.email] },
      { name: 'age', label: 'Age', type: 'number', validators: [Validators.required, Validators.min(18)] },
    ];

      // Declare group with the proper type: Record<string, AbstractControl>
      const group: Record<string, AbstractControl> = {};

    // Create form group dynamically based on the configuration
    this.formFields.forEach(field => {
      group[field.name] = new FormControl('', field.validators);  // Use FormControl for the field
    });


    this.dynamicForm = this.fb.group(group);
  }
  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log('Form Submitted:', this.dynamicForm.value);
    } else {
      console.log('Form Invalid');
    }
  }

}
