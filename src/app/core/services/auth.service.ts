import { Injectable } from '@angular/core';

import { Response } from '@angular/http';

import {
  Observable,
  BehaviorSubject,
  ReplaySubject,
} from 'rxjs';

import { HttpService } from './http.service';

@Injectable()
export class AuthService {
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  private loginSubject = new ReplaySubject<string>(1);

  public constructor(private httpService: HttpService) {
  }

  public getUserInfo(): Observable<string> {
    return this.loginSubject.asObservable();
  }

  public login(login: string, password: string): void {
    this.httpService.post('/auth/login', {
      login: login,
      password: password,
    }).toPromise().then((resp: Response) => {
      localStorage.setItem('token', resp.json().token);
      this.isAuthSubject.next(true);
      this.loginSubject.next(login);
    }).catch((error) => console.log(error.status, error.statusText));
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.isAuthSubject.next(false);
    this.loginSubject.next(undefined);
  }
}
