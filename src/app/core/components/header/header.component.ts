import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../../services';

@Component({
  selector: 'main-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public login: Observable<string>;

  constructor(private authService: AuthService) {}

  public ngOnInit() {
    this.login = this.authService.getUserInfo();
  }
}
