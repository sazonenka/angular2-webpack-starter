import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

import { CoursesService } from '../../core/services';
import { ICourse } from '../../core/entities';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {
  public courseItems: ICourse[] = [];

  constructor(private coursesService: CoursesService) {
  }

  public ngOnInit() {
    this.courseItems = this.coursesService.listCourses();
  }

  public deleteCourse($event) {
    console.log($event);
    if (window.confirm('Do you really want to delete the course?')) {
      this.courseItems.splice($event.index, 1);
      this.coursesService.deleteCourse($event.id);
    }
  }
}
