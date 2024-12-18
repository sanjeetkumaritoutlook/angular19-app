import { Component,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';
  // constructor(private http: HttpClient, private router: Router) {}
  //inject() approach is considered superior to constructor-based DI in most cases.
  private http = inject(HttpClient);
  private router = inject(Router);
  onLogin() {
    const credentials = { username: this.username, password: this.password };
    this.http.post<any>('/api/login', credentials).subscribe(
      response => {
        if (response.token) {
          localStorage.setItem('access_token', response.token);
          this.router.navigate(['/dashboard']);
        } else {
          this.error = response.error;
        }
      },
      err => {
        this.error = 'An error occurred!';
      }
    );
  }
}
