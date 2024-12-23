import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackendService } from './mock-backend.service';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InterceptorsService } from './auth/interceptors.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: MockBackendService, multi: true }, provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true }
  ]
};
//chaining interceptors jwt