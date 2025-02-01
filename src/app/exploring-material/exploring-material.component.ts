import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
//required for mat form field
import {MatInputModule} from '@angular/material/input';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatIconModule} from '@angular/material/icon';
//required for mat timepicker
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-exploring-material',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule,MatInputModule,MatTimepickerModule,MatIconModule],
  templateUrl: './exploring-material.component.html',
  styleUrl: './exploring-material.component.scss'
})
export class ExploringMaterialComponent {

}
