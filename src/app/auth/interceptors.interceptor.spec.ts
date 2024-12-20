import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

// import { interceptorsInterceptor } from './interceptors.interceptor';

// describe('interceptorsInterceptor', () => {
//   const interceptor: HttpInterceptorFn = (req, next) => 
//     TestBed.runInInjectionContext(() => interceptorsInterceptor(req, next));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(interceptor).toBeTruthy();
//   });
// });
import { InterceptorsService } from './interceptors.interceptor';

describe('InterceptorsService', () => {
  let service: InterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});