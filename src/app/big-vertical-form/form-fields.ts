import { FormControl,Validators } from '@angular/forms';

export interface FormField {
    name: string;
    label: string;
    type: string;
    options?: any[]; // For select or radio button options
    validators: any[];
    condition?: (formValue: any) => boolean; // Conditional visibility logic
  }
  
  export const FORM_FIELDS: FormField[] = [
    {
      name: 'field1',
      label: 'Field 1',
      type: 'text',
      validators: [Validators.required],
    },
    {
      name: 'field2',
      label: 'Field 2 (conditionally visible)',
      type: 'text',
      validators: [Validators.required],
      condition: (formValue) => formValue['field1'] === 'show', // Example condition
    },
    // Add more fields as required
  ];
  