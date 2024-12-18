import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FORM_FIELDS } from './form-fields';  // Import the form configuration
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-big-vertical-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './big-vertical-form.component.html',
  styleUrl: './big-vertical-form.component.scss'
})
export class BigVerticalFormComponent  implements OnInit {
  dynamicForm!: FormGroup;  // Non-null assertion operator
  formFields = FORM_FIELDS;  // Assign imported fields
  fb: FormBuilder;  // Declare fb property

  constructor() {
    // Initialize FormBuilder inside the constructor
    this.fb = new FormBuilder();
  }

  showField1 = false;  // Conditional variable for visibility
  ngOnInit() {
    // Initialize the form group
    this.dynamicForm = this.fb.group({});

    // Create form controls dynamically based on formFields
    this.formFields.forEach((field) => {
      this.dynamicForm.addControl(field.name, this.fb.control('', field.validators));
    });

    // Handle conditional field visibility
    this.dynamicForm.get('field1')?.valueChanges.subscribe(value => {
      // Example conditional visibility logic
      // If field1's value is 'show', you might want to show field2
    });
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log('Form Submitted:', this.dynamicForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}