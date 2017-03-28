import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../../../services';

@Component({
  selector: 'logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoffComponent {
  public login: Observable<string>;

  constructor(private authService: AuthService) {
    this.login = this.authService.getUserInfo();
  }

  public logoff(): void {
    this.authService.logout();
  }
}
