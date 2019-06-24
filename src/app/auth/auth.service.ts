import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = false;
  role: string;
  redirectUrl: string;

  constructor() { }

  login(role: string): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLogin = true
        this.role = role;
      })
    );
  }

  logout(): void {
    this.isLogin = false;
    this.role = '';
  }
}
