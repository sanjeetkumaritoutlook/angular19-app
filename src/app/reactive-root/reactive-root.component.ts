import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  imports: [ReactiveFormsModule, CustomInputComponent, CommonModule],
  template: `
    <form [formGroup]="form">
      <label>Enter Name:</label>
      <app-custom-input formControlName="name" placeholder="Enter your name"></app-custom-input>
    </form>
    <p>Value: {{ form.value | json }}</p>
  `
})
export class ReactiveRootComponent {
  form = new FormGroup({
    name: new FormControl('')
  });
}
