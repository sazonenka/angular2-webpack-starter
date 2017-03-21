import { Component } from '@angular/core';

import { AuthService } from '../../services';

@Component({
  selector: 'main-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private authenticated = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authenticated = this.authService.isAuthenticated();
  }
}
