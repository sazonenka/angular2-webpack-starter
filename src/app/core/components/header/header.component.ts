import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from '../../services';

@Component({
  selector: 'main-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public authenticated = false;

  constructor(private authService: AuthService) {
  }

  public ngOnInit() {
    this.authenticated = this.authService.isAuthenticated();
  }
}
