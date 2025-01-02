import { Component } from '@angular/core';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter: number = 0;

  constructor(private counterService: CounterService) {
    this.counterService.counter$.subscribe(value => (this.counter = value));
  }

  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }
  reset(): void {
    this.counterService.reset();
  }
}
