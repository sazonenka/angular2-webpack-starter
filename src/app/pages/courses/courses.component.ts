import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styles: ['./courses.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class CoursesComponent implements OnInit {
  constructor() {
  }

  public ngOnInit() {
    console.log('Courses init');
  }
}
