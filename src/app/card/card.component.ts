import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() theme: 'light' | 'dark' | 'primary' | 'danger' = 'light'; // Default theme
  @Input() title: string = 'Card Title';
  @Input() content: string = 'This is a dynamic card component.';
  @Input() buttonText: string = 'Click Me';
  @Input() buttonType: 'primary' | 'secondary' = 'primary'; // Button style
}
