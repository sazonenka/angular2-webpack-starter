import { Injectable } from '@angular/core';

const LOGIN_KEY = 'COURSES_LOGIN';
const PASSWORD_KEY = 'COURSES_PASSWORD';

@Injectable()
export class AuthService {
  login(login: string, password: string): void {
    localStorage.setItem(LOGIN_KEY, login);
    localStorage.setItem(PASSWORD_KEY, password);
  }

  logout(): void {
    localStorage.removeItem(LOGIN_KEY);
    localStorage.removeItem(PASSWORD_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem[LOGIN_KEY] && !!localStorage.getItem[PASSWORD_KEY];
  }

  getUserInfo(): string {
    return localStorage.getItem[LOGIN_KEY];
  }
}
