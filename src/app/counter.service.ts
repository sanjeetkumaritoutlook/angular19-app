import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  private counterSubject = new BehaviorSubject<number>(0);
  public counter$ = this.counterSubject.asObservable(); //stream of data

  increment(): void {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  decrement(): void {
    this.counterSubject.next(this.counterSubject.value - 1);
  }
  reset(): void {
    this.counterSubject.next(0); // Reset to initial value
  }
}

/*
The $ suffix in the variable name is a naming convention in the RxJS ecosystem that indicates the variable is an observable. This helps 
developers quickly recognize that the variable is not a regular value but a stream of data.
*/