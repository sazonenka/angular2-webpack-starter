import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

import { HttpService } from './http.service';

@Injectable()
export class AuthService {
  public isAuthSubject = new BehaviorSubject<boolean>(false);
  private loginSubject = new ReplaySubject<string>(1);

  public constructor(private httpService: HttpService) {
  }

  public getUserInfo(): Observable<string> {
    return this.loginSubject.asObservable();
  }

  public login(login: string, password: string): Observable<boolean> {
    return this.httpService.post('/auth/login', {login, password})
        .map((resp: Response) => {
          localStorage.setItem('token', resp.json().token);
          this.isAuthSubject.next(true);
          this.loginSubject.next(login);

          return true;
        });
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.isAuthSubject.next(false);
    this.loginSubject.next(undefined);
  }
}
