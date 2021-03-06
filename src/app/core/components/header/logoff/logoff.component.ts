import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../../../services';

@Component({
  selector: 'logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoffComponent implements OnInit {
  public login: Observable<string>;

  constructor(
    private authService: AuthService,
    private router: Router) {}

  public ngOnInit() {
    this.login = this.authService.getUserInfo();
  }

  public logoff(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
