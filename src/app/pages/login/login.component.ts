import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class LoginComponent implements OnInit {
  constructor() {
  }

  public ngOnInit() {
    console.log('Login init');
  }
}
