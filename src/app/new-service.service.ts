import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  default: string = 'Run Me';

  private dataOne = new Subject();
  data = this.dataOne.asObservable();

  private messageSource = new BehaviorSubject(this.default);  //this will be updated later
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  setData(msg: string) {
    this.dataOne.next(msg);
  }
}
