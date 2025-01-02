import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-sibling-one',
  imports: [],
  templateUrl: './sibling-one.component.html',
  styleUrl: './sibling-one.component.scss'
})
export class SiblingOneComponent {
  constructor(private sharedService: SharedService) {}
  sendData() {
    this.sharedService.updateData('Hello from Sibling One');
  }
}
