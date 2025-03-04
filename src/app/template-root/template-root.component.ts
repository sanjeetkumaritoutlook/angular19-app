import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-template-root',
  imports: [FormsModule, CustomInputComponent],
  template: `
    <app-custom-input [(ngModel)]="username" placeholder="Enter name"></app-custom-input>
    <p>Value: {{ username }}</p>
  `
})
export class TemplateRootComponent {
  username = '';

}
