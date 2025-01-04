import { Component ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-child-three',
  imports: [ReactiveFormsModule],
  templateUrl: './child-three.component.html',
  styleUrl: './child-three.component.scss'
})
export class ChildThreeComponent {
  @Input() formGroup!: FormGroup;

}
