import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class MockBackendService  implements HttpInterceptor {

  private users = [{ username: 'admin', password: 'admin123' }];
  private jwtHelper = new JwtHelperService();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === '/api/login' && req.method === 'POST') {
      return this.handleLogin(req);
    }
    return next.handle(req);
  }

  private  handleLogin(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const { username, password } = req.body;
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      const token = this.createJwtToken(user);
      // Wrap the response in HttpResponse
      return of(
        new HttpResponse({
          status: 200,
          body: { token },
        })
      ).pipe(delay(500)); // Simulate delay
    } else {
      return of(
        new HttpResponse({
          status: 401,
          body: { error: 'Invalid credentials' },
        })
      ).pipe(delay(500)); // Simulate delay
    }
  }
  private createJwtToken(payload: any): string {
    const header = { alg: 'HS256', typ: 'JWT' };
    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(payload));
    const signature = btoa('mock-secret'); // Simulate a signature
    return `${encodedHeader}.${encodedPayload}.${signature}`;
  }
}

