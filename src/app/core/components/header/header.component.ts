import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../../services';

@Component({
  selector: 'main-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public login: Observable<string>;

  constructor(private authService: AuthService) {
    this.login = this.authService.getUserInfo();
  }
}
