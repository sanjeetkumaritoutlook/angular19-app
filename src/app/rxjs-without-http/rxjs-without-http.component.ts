import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';
import { BehaviorSubject ,combineLatest} from 'rxjs';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

//Beyond Http requests
//RxJS can absolutely be used without HttpClient in Angular.
//  RxJS is a standalone library for reactive programming, and its operators and utilities 
// can be used for various purposes beyond HTTP requests, such as
//  handling streams, timers, events, or even creating custom reactive systems within an Angular app.

@Component({
  selector: 'app-rxjs-without-http',
  imports: [CommonModule],
  templateUrl: './rxjs-without-http.component.html',
  styleUrl: './rxjs-without-http.component.scss'
})
export class RxjsWithoutHttpComponent {
  counter: number = 0;
  private subscription!: Subscription;
  private stateSubject = new BehaviorSubject<string>('Initial');
  state$ = this.stateSubject.asObservable();
  message: string = '';

  private firstValue = new BehaviorSubject<string>('First');
  private secondValue = new BehaviorSubject<string>('Second');
  combinedValue: string = '';


  ngOnInit(): void {
    //Event handling like debouncing button click
    const button = document.getElementById('myButton');

    if (button) {
      const clicks$ = fromEvent(button, 'click');

      clicks$
        .pipe(debounceTime(500)) // Only emit clicks spaced by 500ms
        .subscribe(() => console.log('Button clicked!'));

    }

     //Timer to create intervals,delays
     const timer$ = interval(1000); // Emit values every second

     this.subscription = timer$.subscribe(value => {
       this.counter = value;
     });

    //create custom observable
    const customObservable$ = new Observable<string>(observer => {
      observer.next('Hello');
      observer.next('RxJS');
      observer.complete();
    });

    customObservable$.subscribe({
      next: value => (this.message = value),
      complete: () => console.log('Observable completed'),
    });

    //combine two streams
    combineLatest([this.firstValue, this.secondValue]).subscribe(([first, second]) => {
      this.combinedValue = `${first} + ${second}`;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Clean up subscription
  }
  //state management
  updateState(newState: string): void {
    this.stateSubject.next(newState);
  }
  updateFirstValue(): void {
    this.firstValue.next('Updated First');
  }

  updateSecondValue(): void {
    this.secondValue.next('Updated Second');
  }
}
