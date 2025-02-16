import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-parent-card',
  imports: [CardComponent],
  templateUrl: './parent-card.component.html',
  styleUrl: './parent-card.component.scss'
})
export class ParentCardComponent {

}
