import { Component, signal, computed } from '@angular/core';
//Signal can be used for Local state management in Angular applications.
//Signals were introduced in Angular 16.0.0,
//allowing developers to manage state and reactivity without relying on Zone.js. 
// Angular is moving towards making Zone.js optional,
@Component({
  selector: 'app-signal-counter',
  imports: [],
  templateUrl: './signal-counter.component.html',
  styleUrl: './signal-counter.component.scss'
})
export class SignalCounterComponent {
  //A signal is a reactive primitive that holds a value. 
  // When its value changes, it notifies its subscribers (such as Angular templates) to update.
  count = signal(0); // Reactive state
  // A computed signal derives its value from other signals. 
  // It automatically updates when its dependencies change.
  doubleCount = computed(() => this.count() * 2); // Derived state
//either use set() or update() method to update the signal's value.
  setCount(value: number) {
    this.count.set(value); // Update state
  }
  increment() {
    this.count.update(value => value + 1); // Update state
  }
}
