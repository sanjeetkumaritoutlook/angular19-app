import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-new-child',
  imports: [],
  templateUrl: './new-child.component.html',
  styleUrl: './new-child.component.scss'
})
export class NewChildComponent {
@Input() user: string ='';
}
