import { Component ,Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-child-five',
  imports: [ReactiveFormsModule,DropdownModule,CalendarModule],
  templateUrl: './child-five.component.html',
  styleUrl: './child-five.component.scss'
})
export class ChildFiveComponent {
  @Input() formGroup!: FormGroup;
  dropdownOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];
}
