import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-sibling-two',
  imports: [],
  templateUrl: './sibling-two.component.html',
  styleUrl: './sibling-two.component.scss'
})
export class SiblingTwoComponent {
  data: string = '';
  constructor(private sharedService: SharedService) {
    this.sharedService.data$.subscribe(value => {
      this.data = value;
    });
  }
}
