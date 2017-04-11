import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import {
  AuthService,
  LoaderBlockService,
} from '../../core/services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public login: string;
  public password: string;

  constructor(
      private authService: AuthService,
      private loaderService: LoaderBlockService) {
  }

  public tryLogin() {
    this.loaderService.show();
    setTimeout(() => {
      this.authService.login(this.login, this.password);
      console.log(this.login, 'was logged in.');

      this.loaderService.hide();
    }, 3000);
  }
}
