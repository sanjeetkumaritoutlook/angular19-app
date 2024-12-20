import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentMessage: string = "Hello from Parent!";
  receivedMessage: string = '';
//(childEvent)="receiveChildMessage($event) -> Parent Listens
  //$event:Represents the data emitted by the event, which in this case is the string "Hello from Child!".
  receiveChildMessage(message: string) {  //EventEmitter<string>();
    this.receivedMessage = message;  // The message variable gets the value "Hello from Child!"
  }
}
