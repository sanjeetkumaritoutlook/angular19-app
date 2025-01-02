import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//Using a Shared Service with Subject or BehaviorSubject
//A shared service facilitates communication between sibling components.

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  private dataSubject = new BehaviorSubject<string>('Initial Value');
  //asObservable() method in RxJS is used to create an observable from a subject,
  //  allowing you to expose the observable part of a subject while hiding its ability to emit new values.

  data$ = this.dataSubject.asObservable();

  updateData(data: string) {
    this.dataSubject.next(data); // Emit new values
  }
}

/*
 BehaviorSubject is a type of subject that has the following unique characteristics:

Key Features of BehaviorSubject:
Initial Value:
A BehaviorSubject requires an initial value to be passed when it is created. This initial value is immediately available to subscribers, even if no values have been emitted yet.

Last Value Replay:
It remembers the last emitted value and sends it to new subscribers, so they always receive the most recent value upon subscription.

Acts as Both Observable and Observer:
Like other subjects, a BehaviorSubject is both an observable and an observer:

Observable: Components or services can subscribe to it.
Observer: It can emit new values using next().

Since BehaviorSubject has an initial value, it's ideal for scenarios where subscribers should always have some data to work with, even before any updates.



In RxJS, a Subject is a special type of observable that acts as both an observer (it can emit values) and an observable (it can be subscribed to). It is a key building block in reactive programming, enabling the multicasting of data to multiple observers.

In RxJS, an observable is a core concept that represents a stream of data that can be observed over time. Observables are used to handle asynchronous data streams in a declarative way, making it easier to work with events, HTTP requests, and other asynchronous operations in Angular and other JavaScript applications.

Why Use asObservable()?
In RxJS, a subject is both an observable and an observer:

It can emit values (acting as an observer).
It can be subscribed to (acting as an observable).


*/