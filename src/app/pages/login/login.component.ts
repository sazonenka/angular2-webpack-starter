import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, LoaderBlockService } from '../../core/services';

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
      private loaderService: LoaderBlockService,
      private router: Router) {}

  public tryLogin() {
    this.loaderService.show();
    setTimeout(() => {
      this.authService.login(this.login, this.password)
          .toPromise()
          .then((success) => {
            this.loaderService.hide();
            this.router.navigateByUrl('/courses');
          })
          .catch((e) => {
            this.loaderService.hide();
            console.log(e.statusText);
          });
    }, 1000);
  }
}
