import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';  // Import delay from RxJS

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';  // Replace with your API URL
//private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY';
//private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    // return this.http.get<any>(this.apiUrl);
    return this.http.get<any>(this.apiUrl).pipe(
      delay(2000)  // Delay the response by 10 seconds (10000 milliseconds).
    );
  }
}
