import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { CoursesService, LoaderBlockService } from '../../core/services';
import { ICourse } from '../../core/entities';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {
  public courseItems: ICourse[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private coursesService: CoursesService, 
    private loaderService: LoaderBlockService) {
  }

  public ngOnInit() {
    this.courseItems = this.coursesService.listCourses();
  }

  public deleteCourse($event) {
    if (window.confirm('Do you really want to delete the course?')) {
      this.loaderService.show();
      setTimeout(() => {
        this.coursesService.deleteCourse($event.id);
        this.courseItems = this.coursesService.listCourses();
        this.cd.markForCheck();
        this.loaderService.hide();
      }, 3000);
    }
  }
}
