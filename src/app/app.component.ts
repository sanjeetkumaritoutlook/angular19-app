import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { RainbowHoverDirective } from './rainbow-hover.directive';
import {TitleCaseExceptPipe} from './title-case-except.pipe';
import { CommonModule } from '@angular/common'; //to import built-in pipe same like to import built in structural directives
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,RainbowHoverDirective,TitleCaseExceptPipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'angular19-app';
  // built-in json pipe in Angular is used to transform a JavaScript object or array into a JSON string. 
  // It is especially useful for debugging or displaying structured data in templates.
  user = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    },
    hobbies: ['reading', 'traveling', 'coding']
  };
}
