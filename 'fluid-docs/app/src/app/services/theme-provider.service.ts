import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeProviderService {
  theme$: BehaviorSubject<string> = new BehaviorSubject<string>('corp');

  constructor() {}

  getTheme(): Observable<string> {
    return this.theme$.asObservable();
  }

  setTheme(theme: string) {
    this.theme$.next(theme);
  }
}
