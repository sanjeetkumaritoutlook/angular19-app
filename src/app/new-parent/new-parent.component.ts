import { Component } from '@angular/core';
import { NewChildComponent } from '../new-child/new-child.component';
import { NewServiceService } from '../new-service.service';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Observable, switchMap } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-parent',
  imports: [NewChildComponent,ReactiveFormsModule],
  templateUrl: './new-parent.component.html',
  styleUrl: './new-parent.component.scss'
})
export class NewParentComponent {
  searchControl = new FormControl();
  users: any[] = [];
  name: string = 'Hello World';
  message: any;
  constructor(private service: NewServiceService, private http: HttpClient) {
    this.service.currentMessage.subscribe((msg) => (this.message = msg));
    // this.service.data.subscribe((msg) => (this.message = msg));
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((value) => this.searchUsers(value))
      )
      .subscribe((users) => (this.users = users));
  }

  ngOnInit() {}

  updateMessage() {
    this.service.changeMessage('Joy');
    // this.service.setData('shiva');
  }
  makeRequest() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => console.log(res, 'data'));
  }

  searchUsers(term: string): Observable<any[]> {
    return this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/users?search=${term}`
    );
  }

}
