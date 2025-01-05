import { Component } from '@angular/core';
//directly managing state in the component using standard TypeScript properties and methods
// Angular's interpolation syntax ({{ ... }}).
//No extra overhead from observables or signal tracking.
//Suitable for simple components with limited state and no asynchronous dependencies.
@Component({
  selector: 'app-simple-counter',
  imports: [],
  templateUrl: './simple-counter.component.html',
  styleUrl: './simple-counter.component.scss'
})
export class SimpleCounterComponent {
  //no constants within class definition
  count = 0; // Reactive state
  get doubleCount() {  //getter property
    return this.count * 2; // Derived state
  }

  increment() {
    this.count += 1; // Update state
  }
}
