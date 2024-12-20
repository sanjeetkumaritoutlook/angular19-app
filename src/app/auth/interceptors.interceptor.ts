// import { HttpInterceptorFn } from '@angular/common/http';

// export const interceptorsInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorsService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE'),
    });

    // Pass the cloned request instead of the original request to the next handler
    return next.handle(clonedRequest).pipe(tap((api) => console.log(api)));

    // throw new Error('Method not implemented.');
  }
}
