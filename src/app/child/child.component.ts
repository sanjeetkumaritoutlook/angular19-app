import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() message: string = ''; // Receives data from parent
  @Output() childEvent = new EventEmitter<string>(); // Emits events to parent
  sendMessage() {
    this.childEvent.emit("Hello from Child!");
    //Emits an event with the string "Hello from Child!".
   //This string becomes the payload of the event.
  }
}
