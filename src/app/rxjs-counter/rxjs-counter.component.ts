import { Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-rxjs-counter',
  imports: [CommonModule],
  templateUrl: './rxjs-counter.component.html',
  styleUrl: './rxjs-counter.component.scss'
})
export class RxjsCounterComponent {
  private countSubject = new BehaviorSubject<number>(0); // Reactive state, initial value is 0
  count$ = this.countSubject.asObservable(); // Observable of count,this is Observable

  doubleCount$ = this.count$.pipe(
    map(count => count * 2) // Derived state
  );

  increment() {
    this.countSubject.next(this.countSubject.value + 1); // Update state
  }
}
