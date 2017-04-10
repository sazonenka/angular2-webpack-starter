import { Injectable } from '@angular/core';

import { ReplaySubject, Observable } from 'rxjs';

const LOGIN_KEY = 'COURSES_LOGIN';
const PASSWORD_KEY = 'COURSES_PASSWORD';

@Injectable()
export class AuthService {
  private loginSubject = new ReplaySubject<string>(1);

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
