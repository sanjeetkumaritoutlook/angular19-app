import { Component,OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-response-data',
  imports: [CommonModule,MatProgressSpinnerModule],
  templateUrl: './response-data.component.html',
  styleUrl: './response-data.component.scss'
})
export class ResponseDataComponent implements OnInit {
  data: any = null;  // To store the fetched data
  loading: boolean = true;  // To track the loading state

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe({
      next: (response) => {
        this.data = response;  // Store the response data
        this.loading = false;   // Hide the loading spinner
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.loading = false;  // Hide the loading spinner in case of error
      },
    });
  }
}
