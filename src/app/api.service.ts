import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';  // Import delay from RxJS
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';  // Replace with your API URL
private apiUrl3 = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=angular&format=json&origin=*';
private apiUrl2 = 'https://jsonplaceholder.typicode.com/posts?q=1';
//https://jsonplaceholder.typicode.com/posts?q=${query}
//https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get<any>(this.apiUrl).pipe(
      delay(2000)  // Delay the response by 10 seconds (10000 milliseconds).
    );
  }

  fetchData(): Observable<any> {
    return this.http.get(this.apiUrl2).pipe(
      map((data) => {
        // Transform data if needed
        return data;
      }),
      catchError((error) => {
        console.error('Error fetching data', error);
        throw error;
      })
    );   //subscribe is used in the consuming application
  }
}
