import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildOneComponent } from '../child-one/child-one.component';
import { ChildTwoComponent } from '../child-two/child-two.component';
import { ChildThreeComponent } from '../child-three/child-three.component';
import { ChildFourComponent } from '../child-four/child-four.component';
import { ChildFiveComponent } from '../child-five/child-five.component';
@Component({
  selector: 'app-parent-form',
  imports: [ReactiveFormsModule,ChildOneComponent,ChildTwoComponent,ChildThreeComponent,ChildFourComponent,ChildFiveComponent],
  templateUrl: './parent-form.component.html',
  styleUrl: './parent-form.component.scss'
})
export class ParentFormComponent implements OnInit {
  parentForm!: FormGroup;
  childForms!: { [key: string]: FormGroup };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.childForms = {
      childOne: this.fb.group({
        field1: [''],
        field2: [''],
        // Add other fields
      }),
      childTwo: this.fb.group({
        field3: [''],
        field4: [{ value: '', disabled: true }], // Initially disabled
        // Add other fields
      }),
      childThree: this.fb.group({
        field5: [''],
        field6: [''],
        // Fields for child three
      }),
      childFour: this.fb.group({
        field7: [''],
        field8: [''],
        // Fields for child four
      }),
      childFive: this.fb.group({
        dropdownField: [''],
        dateField: [''],
        // Fields for child five
      }),
    };

    this.parentForm = this.fb.group(this.childForms);

    // Cross-field functionality
    this.handleCrossFieldLogic();
    //this.childForms['childTwo'].get('field4')?.disable(); // Should disable the control

  }

  handleCrossFieldLogic() {
    this.childForms['childOne'].get('field1')?.valueChanges.subscribe((value) => {
      console.log('Value Changed:', value); // Ensure this logs when the value changes
      const childTwoControl = this.childForms['childTwo'].get('field4');
      if (value === 'specificValue') {
        childTwoControl?.enable();
      } else {
        childTwoControl?.disable();
      }
    });
  }

  //single level object
  flattenFormValues(formValues: any): any {
    return Object.keys(formValues).reduce((acc, key) => {
      return { ...acc, ...formValues[key] };
    }, {});
  }

  
  onSubmit() {
    console.log(this.parentForm.value);
    const flattenedValues = this.flattenFormValues(this.parentForm.value);
    console.log(flattenedValues);
  }
}
