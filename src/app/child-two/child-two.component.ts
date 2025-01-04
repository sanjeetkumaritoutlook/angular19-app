import { Component ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-child-two',
  imports: [ReactiveFormsModule],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.scss'
})
export class ChildTwoComponent {
  @Input() formGroup!: FormGroup;

}
