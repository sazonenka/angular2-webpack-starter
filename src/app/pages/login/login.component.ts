import { Component } from '@angular/core';

import { AuthService } from '../../core/services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private login: string;
  private password: string;

  constructor(private authService: AuthService) {
  }

  tryLogin() {
    this.authService.login(this.login, this.password);
    console.log(this.login, "was logged in.");
  }
}
