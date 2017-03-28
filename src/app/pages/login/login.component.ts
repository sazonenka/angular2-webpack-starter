import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from '../../core/services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public login: string;
  public password: string;

  constructor(private authService: AuthService) {
  }

  public tryLogin() {
    this.authService.login(this.login, this.password);
    console.log(this.login, 'was logged in.');
  }
}
