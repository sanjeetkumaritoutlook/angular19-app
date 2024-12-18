import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  imports: [],
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.scss'
})
export class ObservableExampleComponent {

  //the observable and observer are local to the constructor and not class properties. This is useful if the observable is only needed within the method and does not need to be accessed elsewhere in the class.
  constructor() {
    // Create an observable inside the constructor or a method
    const observable: Observable<number> = new Observable(subscriber => {
      subscriber.next(1);  // Emit first value
      subscriber.next(2);  // Emit second value
      subscriber.next(3);  // Emit third value
      subscriber.complete();  // Complete the observable
    });

    // Define an observer inside the method
    const observer = {
      next: (value: number) => console.log('Next value:', value),  // Called for each emitted value
      error: (err: any) => console.log('Error:', err),  // Called if the observable encounters an error
      complete: () => console.log('Completed')  // Called when the observable completes
    };

    // Subscribe to the observable
    observable.subscribe(observer);
  }

}

// Subscribe to the observable
// const example = new ObservableExampleComponent();
// example.subscribeToObservable();