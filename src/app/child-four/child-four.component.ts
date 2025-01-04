import { Component ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-four',
  imports: [ReactiveFormsModule],
  templateUrl: './child-four.component.html',
  styleUrl: './child-four.component.scss'
})
export class ChildFourComponent {
  @Input() formGroup!: FormGroup;

}
