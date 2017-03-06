import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: 'header.component.html',
  styles: ['./header.component.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  constructor() {
  }
}
