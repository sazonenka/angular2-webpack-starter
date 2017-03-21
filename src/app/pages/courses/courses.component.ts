import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../core/services';
import { ICourse } from '../../core/entities';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courseItems: ICourse[] = [];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.courseItems = this.coursesService.listCourses();
  }

  deleteCourse($event) {
    console.log($event);
    if (window.confirm('Do you really want to delete the course?')) {
      this.courseItems.splice($event.index, 1);
      this.coursesService.deleteCourse($event.id);
    }
  }
}
