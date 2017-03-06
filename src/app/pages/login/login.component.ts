import { Component, OnInit } from '@angular/core';

@Component({
  template: './login.component.html',
  styles: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {
  }

  public ngOnInit() {
    console.log('Login init');
  }
}
