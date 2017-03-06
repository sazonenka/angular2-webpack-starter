import { Component, OnInit } from '@angular/core';

@Component({
  template: './courses.component.html',
  styles: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  constructor() {
  }

  public ngOnInit() {
    console.log('Courses init');
  }
}
