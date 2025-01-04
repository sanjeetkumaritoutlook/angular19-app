import { Component ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-child-one',
  imports: [ReactiveFormsModule],
  templateUrl: './child-one.component.html',
  styleUrl: './child-one.component.scss'
})
export class ChildOneComponent {
  @Input() formGroup!: FormGroup;

}
