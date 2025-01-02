import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs'; // Import `of` to return a fallback value
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
@Component({
  selector: 'app-lazy',
  imports: [CommonModule,InfiniteScrollModule],
   templateUrl: './lazy.component.html',
  // template: `<h1>Lazy Loaded Component</h1>`,
  styleUrl: './lazy.component.scss'
})
export class LazyComponent  implements OnInit {
  apiData: any;
  // apiData: any[] = [];
  errorMessage: string = '';
//pagination for large data sets
  currentPage: number = 1;
  pageSize: number = 5; // Number of items per page
  loading: boolean = false; //for infinite scroll
  filteredData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch data from a sample public API
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
    //   this.apiData = data;
    // });

      // Fetch data with error handling
      // this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      //   catchError(error => {
      //     this.errorMessage = 'Failed to load data. Please try again later.';
      //     return of(null); // Return a fallback value (null)
      //   })
      // ).subscribe(data => {
      //   if (data) {
      //     this.apiData = data;
      //   }
      // });
      this.fetchData();
    }

     // Function to fetch paginated data
  fetchData(): void {
    if (this.loading) return;

    this.loading = true;
    const url = `https://jsonplaceholder.typicode.com/users?_page=${this.currentPage}&_limit=${this.pageSize}`;
    
    this.http.get(url).pipe(
      catchError(error => {
        this.errorMessage = 'Failed to load data. Please try again later.';
        return of(null);
      })
    ).subscribe(data => {
      if (data) {
         this.apiData = data;
        // this.apiData = [...this.apiData, ...(data as any[])]; // Append new data
        this.loading = false;
      }
    });
  }

  onScroll(): void {
    this.currentPage++;
    this.fetchData();
  }
    // Function to go to the next page
    nextPage(): void {
      this.currentPage++;
      this.fetchData();
    }
  
    // Function to go to the previous page
    previousPage(): void {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchData();
      }
    }
    sortData(field: string): void {
      this.apiData.sort((a: any, b: any) => {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
      });
    }

    filterData(query: string): void {
      this.filteredData = this.apiData.filter((user: any) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
    }

  }

