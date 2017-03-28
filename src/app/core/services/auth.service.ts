import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

const LOGIN_KEY = 'COURSES_LOGIN';
const PASSWORD_KEY = 'COURSES_PASSWORD';

@Injectable()
export class AuthService {
  private loginSubject = new BehaviorSubject<string>(undefined);

  public getUserInfo(): Observable<string> {
    return this.loginSubject.asObservable();
  }

  public login(login: string, password: string): void {
    this.loginSubject.next(login);
  }

  public logout(): void {
    this.loginSubject.next(undefined);
  }
}
